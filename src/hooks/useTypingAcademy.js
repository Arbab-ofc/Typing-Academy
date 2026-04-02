import { useMemo, useState } from 'react';
import { TOTAL_LESSONS } from '../utils/constants';
import { deriveAchievements } from '../utils/achievements';
import { loadProgress, saveProgress } from '../utils/storage';
import { LANGUAGE_OPTIONS } from '../data/courseData';

function toNumber(value, fallback = 0) {
  const next = Number(value);
  return Number.isFinite(next) ? next : fallback;
}

function createLanguageProgress() {
  return {
    completedLessons: [],
    unlockedLessons: [1],
    currentLesson: 1,
    lessonStats: {},
    totalSessions: 0,
    totalPracticeTime: 0,
    history: [],
    achievements: []
  };
}

function normalizeProgress(raw) {
  const base = {
    activeLanguage: 'english',
    languages: {
      english: createLanguageProgress(),
      hindi: createLanguageProgress()
    }
  };

  if (!raw || typeof raw !== 'object') return base;

  if (raw.languages && typeof raw.languages === 'object') {
    return {
      ...base,
      ...raw,
      languages: {
        english: { ...base.languages.english, ...(raw.languages.english || {}) },
        hindi: { ...base.languages.hindi, ...(raw.languages.hindi || {}) }
      }
    };
  }

  // Legacy migration: treat existing shape as English progress.
  return {
    ...base,
    activeLanguage: 'english',
    languages: {
      ...base.languages,
      english: { ...base.languages.english, ...raw }
    }
  };
}

export default function useTypingAcademy() {
  const [progressStore, setProgressStore] = useState(() => normalizeProgress(loadProgress()));

  const activeLanguage = progressStore.activeLanguage || 'english';
  const progress = progressStore.languages?.[activeLanguage] || createLanguageProgress();

  const progressSummary = useMemo(() => {
    const lessonEntries = Object.values(progress.lessonStats || {});
    const completedCount = progress.completedLessons.length;
    const completionPercent = Math.round((completedCount / TOTAL_LESSONS) * 100);

    const averageAccuracy = lessonEntries.length
      ? Math.round(lessonEntries.reduce((acc, item) => acc + toNumber(item.bestAccuracy, 0), 0) / lessonEntries.length)
      : 0;

    const averageWpm = lessonEntries.length
      ? Math.round(lessonEntries.reduce((acc, item) => acc + toNumber(item.bestWpm, 0), 0) / lessonEntries.length)
      : 0;

    const bestWpm = lessonEntries.length ? Math.max(...lessonEntries.map((item) => toNumber(item.bestWpm, 0))) : 0;

    return {
      completedCount,
      completionPercent,
      averageAccuracy,
      averageWpm,
      bestWpm
    };
  }, [progress]);

  const persist = (updater) => {
    setProgressStore((prev) => {
      const nextRaw = typeof updater === 'function' ? updater(prev) : updater;
      const next = normalizeProgress(nextRaw);
      saveProgress(next);
      return next;
    });
  };

  const updateCurrentLanguageProgress = (updater) => {
    persist((prev) => {
      const currentLanguage = prev.activeLanguage || 'english';
      const current = prev.languages?.[currentLanguage] || createLanguageProgress();
      const nextCurrent = typeof updater === 'function' ? updater(current) : updater;

      return {
        ...prev,
        languages: {
          ...prev.languages,
          [currentLanguage]: nextCurrent
        }
      };
    });
  };

  const completeLesson = ({ lessonId, result }) => {
    updateCurrentLanguageProgress((prev) => {
      const nextLesson = Math.min(TOTAL_LESSONS, lessonId + 1);
      const completedLessons = result.passed
        ? Array.from(new Set([...prev.completedLessons, lessonId])).sort((a, b) => a - b)
        : prev.completedLessons;
      const unlockedLessons = result.passed
        ? Array.from(new Set([...prev.unlockedLessons, lessonId, nextLesson])).sort((a, b) => a - b)
        : prev.unlockedLessons;
      const prevStats = prev.lessonStats?.[lessonId] || {};

      const lessonStats = {
        ...prev.lessonStats,
        [lessonId]: {
          bestWpm: Math.max(toNumber(prevStats.bestWpm), toNumber(result.wpm)),
          bestAccuracy: Math.max(toNumber(prevStats.bestAccuracy), toNumber(result.accuracy)),
          bestTime: prevStats.bestTime ? Math.min(prevStats.bestTime, result.elapsedSeconds) : result.elapsedSeconds,
          sessions: toNumber(prevStats.sessions) + 1,
          lastPlayedAt: result.completedAt
        }
      };

      const history = [
        {
          lessonId,
          language: activeLanguage,
          ...result
        },
        ...(prev.history || [])
      ].slice(0, 60);

      const nextData = {
        ...prev,
        completedLessons,
        unlockedLessons,
        currentLesson: result.passed ? nextLesson : lessonId,
        lessonStats,
        totalSessions: toNumber(prev.totalSessions) + 1,
        totalPracticeTime: toNumber(prev.totalPracticeTime) + toNumber(result.elapsedSeconds),
        history
      };

      const achievements = deriveAchievements({
        completedCount: completedLessons.length,
        averageAccuracy:
          Object.values(lessonStats).reduce((sum, item) => sum + toNumber(item.bestAccuracy), 0) /
            Math.max(1, Object.keys(lessonStats).length) || 0,
        bestWpm: Math.max(0, ...Object.values(lessonStats).map((item) => toNumber(item.bestWpm)))
      });

      return {
        ...nextData,
        achievements
      };
    });
  };

  const resetProgress = () => {
    persist({
      activeLanguage,
      languages: {
        english: createLanguageProgress(),
        hindi: createLanguageProgress()
      }
    });
  };

  const setActiveLanguage = (language) => {
    if (!LANGUAGE_OPTIONS.some((item) => item.id === language)) return;

    persist((prev) => ({
      ...prev,
      activeLanguage: language
    }));
  };

  return {
    progress,
    progressSummary,
    completeLesson,
    resetProgress,
    setProgress: updateCurrentLanguageProgress,
    activeLanguage,
    setActiveLanguage,
    availableLanguages: LANGUAGE_OPTIONS
  };
}
