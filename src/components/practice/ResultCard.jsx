import { Link } from 'react-router-dom';
import { formatDuration } from '../../utils/typing';

export default function ResultCard({ result, lesson }) {
  const nextLessonId = Math.min(50, lesson.id + 1);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-panel sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-400">Lesson Result</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-white">{lesson.title}</h1>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <Metric label="Time" value={formatDuration(result.elapsedSeconds)} />
        <Metric label="WPM" value={result.wpm} />
        <Metric label="Accuracy" value={`${result.accuracy}%`} />
        <Metric label="Mistakes" value={result.mistakes} />
        <Metric label="Status" value={result.passed ? 'Pass' : 'Retry'} />
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-ink-900/70 p-4 text-sm text-slate-200">
        {result.passed
          ? 'Excellent work. Your next lesson has been unlocked and your progress is saved.'
          : 'Good effort. Retry this lesson to improve your accuracy and speed before advancing.'}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          to={`/lessons/${lesson.id}`}
          className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10"
        >
          Retry Lesson
        </Link>
        <Link
          to={`/lessons/${nextLessonId}`}
          className="rounded-xl bg-gradient-to-r from-ocean-500 to-mint-500 px-4 py-2 text-sm font-semibold text-ink-950"
        >
          Next Lesson
        </Link>
        <Link
          to="/lessons"
          className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10"
        >
          Back to Lessons
        </Link>
        <Link
          to="/dashboard"
          className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-white/10"
        >
          View Dashboard
        </Link>
      </div>
    </section>
  );
}

function Metric({ label, value }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.15em] text-slate-400">{label}</p>
      <p className="mt-1 font-display text-xl font-semibold text-white">{value}</p>
    </article>
  );
}
