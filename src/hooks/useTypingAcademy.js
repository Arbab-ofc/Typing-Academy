import { useMemo, useState } from 'react';
import { TOTAL_LESSONS } from '../utils/constants';
import { deriveAchievements } from '../utils/achievements';
import { loadProgress, saveProgress } from '../utils/storage';

function toNumber(value, fallback = 0) {
  const next = Number(value);
  return Number.isFinite(next) ? next : fallback;
}

export default function useTypingAcademy() {
  const [progress, setProgress] = useState(() => loadProgress());

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
    setProgress((prev) => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      saveProgress(next);
      return next;
    });
  };

  const completeLesson = ({ lessonId, result }) => {
    persist((prev) => {
      const completedLessons = Array.from(new Set([...prev.completedLessons, lessonId])).sort((a, b) => a - b);
      const nextLesson = Math.min(TOTAL_LESSONS, lessonId + 1);
      const unlockedLessons = Array.from(new Set([...prev.unlockedLessons, lessonId, nextLesson])).sort((a, b) => a - b);
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
          ...result
        },
        ...(prev.history || [])
      ].slice(0, 60);

      const nextData = {
        ...prev,
        completedLessons,
        unlockedLessons,
        currentLesson: nextLesson,
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
      completedLessons: [],
      unlockedLessons: [1],
      currentLesson: 1,
      lessonStats: {},
      totalSessions: 0,
      totalPracticeTime: 0,
      history: [],
      achievements: []
    });
  };

  return {
    progress,
    progressSummary,
    completeLesson,
    resetProgress,
    setProgress: persist
  };
}
