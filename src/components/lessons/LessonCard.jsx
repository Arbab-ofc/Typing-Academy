import { Link } from 'react-router-dom';
import LessonStatusBadge from './LessonStatusBadge';

export default function LessonCard({ lesson, status }) {
  const isLocked = status === 'locked';

  return (
    <article
      className={`group rounded-2xl border p-5 shadow-panel transition ${
        isLocked
          ? 'border-white/10 bg-white/[0.02] opacity-80'
          : status === 'completed'
            ? 'border-mint-500/30 bg-mint-500/[0.06] hover:-translate-y-1'
            : status === 'current'
              ? 'border-ocean-500/35 bg-ocean-500/[0.08] hover:-translate-y-1'
              : 'border-white/10 bg-white/5 hover:-translate-y-1 hover:bg-white/[0.08]'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Lesson {lesson.id}</p>
          <h3 className="mt-2 font-display text-xl font-semibold text-white">{lesson.title}</h3>
        </div>
        <LessonStatusBadge status={status} />
      </div>

      <p className="mt-3 text-sm text-slate-300">{lesson.description}</p>

      <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-lg bg-white/5 p-2">
          <dt className="text-slate-400">Category</dt>
          <dd className="mt-1 text-slate-100">{lesson.category}</dd>
        </div>
        <div className="rounded-lg bg-white/5 p-2">
          <dt className="text-slate-400">Difficulty</dt>
          <dd className="mt-1 text-slate-100">{lesson.difficulty}</dd>
        </div>
        <div className="col-span-2 rounded-lg bg-white/5 p-2">
          <dt className="text-slate-400">Keys</dt>
          <dd className="mt-1 font-mono text-slate-100">{lesson.keysPracticed}</dd>
        </div>
      </dl>

      {isLocked ? (
        <button
          type="button"
          disabled
          className="mt-4 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-slate-500"
        >
          Unlock previous lessons first
        </button>
      ) : (
        <Link
          to={`/lessons/${lesson.id}`}
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
        >
          {status === 'completed' ? 'Practice Again' : status === 'current' ? 'Continue Lesson' : 'Start Lesson'}
        </Link>
      )}
    </article>
  );
}
