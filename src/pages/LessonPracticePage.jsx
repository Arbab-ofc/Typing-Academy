import { useMemo } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SectionHeader from '../components/common/SectionHeader';
import TypingPanel from '../components/practice/TypingPanel';
import { getLessonByLanguageAndId } from '../data/courseData';
import { useAcademyContext } from '../hooks/useAcademyContext';
import useTypingSession from '../hooks/useTypingSession';
import { saveRecentResult } from '../utils/storage';
import { transliterateToHindi } from '../utils/transliteration';

export default function LessonPracticePage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { progress, completeLesson, settings, activeLanguage } = useAcademyContext();
  const lesson = getLessonByLanguageAndId(activeLanguage, lessonId);

  const numericLessonId = Number(lessonId);
  const isUnlocked = progress.unlockedLessons.includes(numericLessonId);
  const hasHindiScriptTarget = /[\u0900-\u097F]/.test(lesson?.content ?? '');
  const transliterationActive =
    activeLanguage === 'hindi' && settings.hindiTransliterationEnabled && hasHindiScriptTarget;

  const session = useTypingSession({
    lessonId: numericLessonId,
    targetText: lesson?.content ?? '',
    inputTransformer: transliterationActive ? transliterateToHindi : undefined
  });

  const nextLessonId = useMemo(() => Math.min(50, numericLessonId + 1), [numericLessonId]);

  if (!lesson) return <Navigate to="/lessons" replace />;
  if (!isUnlocked) return <Navigate to="/lessons" replace />;

  const handleComplete = () => {
    const result = {
      elapsedSeconds: Math.max(1, session.elapsedSeconds),
      wpm: session.metrics.wpm,
      accuracy: session.metrics.accuracy,
      mistakes: session.metrics.mistakes,
      typedCharacters: session.metrics.typedCharacters,
      passed: session.completionMeta.passed,
      completedAt: new Date().toISOString()
    };

    completeLesson({ lessonId: numericLessonId, result });

    saveRecentResult({
      lessonId: numericLessonId,
      lessonTitle: lesson.title,
      ...result,
      unlockedNextLesson: result.passed && numericLessonId < 50,
      language: activeLanguage
    });

    toast.success(result.passed ? 'Lesson passed and progress saved' : 'Lesson saved. Retry to unlock next lesson');
    navigate(`/results/${numericLessonId}`);
  };

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
        <SectionHeader
          eyebrow={`Lesson ${lesson.id}`}
          title={lesson.title}
          description={lesson.description}
          rightSlot={
            <Link
              to={`/lessons/${nextLessonId}`}
              className="rounded-xl border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100"
            >
              Next Lesson
            </Link>
          }
        />

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-white/5 p-3 text-sm">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Goal</p>
            <p className="mt-1 text-slate-100">{lesson.goal}</p>
          </div>
          <div className="rounded-xl bg-white/5 p-3 text-sm">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Keys Practiced</p>
            <p className="mt-1 font-mono text-slate-100">{lesson.keysPracticed}</p>
          </div>
          <div className="rounded-xl bg-white/5 p-3 text-sm">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Tip</p>
            <p className="mt-1 text-slate-100">{lesson.tips || 'Relax your shoulders and keep your eyes on the screen.'}</p>
          </div>
        </div>
      </section>

      <TypingPanel
        lesson={lesson}
        session={session}
        onComplete={handleComplete}
        textSize={settings.textSize}
        panelSize={settings.panelSize}
        language={activeLanguage}
        transliterationEnabled={transliterationActive}
        transliterationRequested={activeLanguage === 'hindi' && settings.hindiTransliterationEnabled}
      />
    </div>
  );
}
