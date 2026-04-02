import { useMemo } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SectionHeader from '../components/common/SectionHeader';
import TypingPanel from '../components/practice/TypingPanel';
import { getLessonById } from '../data/lessons';
import { useAcademyContext } from '../hooks/useAcademyContext';
import useTypingSession from '../hooks/useTypingSession';
import { saveRecentResult } from '../utils/storage';
import { TOTAL_LESSONS } from '../utils/constants';

export default function LessonPracticePage() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const { progress, completeLesson, settings } = useAcademyContext();
  const lesson = getLessonById(lessonId);

  const numericLessonId = Number(lessonId);
  const isUnlocked =
    settings.learningMode === 'unlocked' || progress.unlockedLessons.includes(numericLessonId);

  const session = useTypingSession({
    lessonId: numericLessonId,
    targetText: lesson?.content ?? ''
  });

  const nextLessonId = useMemo(() => Math.min(TOTAL_LESSONS, numericLessonId + 1), [numericLessonId]);

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
      unlockedNextLesson: result.passed && numericLessonId < TOTAL_LESSONS
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
      />
    </div>
  );
}
