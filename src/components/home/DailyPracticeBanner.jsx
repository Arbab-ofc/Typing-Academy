import { Link } from 'react-router-dom';

export default function DailyPracticeBanner({ currentLessonId }) {
  return (
    <section className="rounded-3xl border border-ocean-500/30 bg-gradient-to-r from-ocean-500/10 to-mint-500/10 p-5 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-ocean-300">Daily Practice</p>
          <p className="mt-1 text-sm text-slate-200">Consistency beats intensity. Resume your current lesson in under 5 minutes.</p>
        </div>
        <Link
          to={`/lessons/${currentLessonId}`}
          className="inline-flex rounded-xl bg-white px-4 py-2 text-sm font-semibold text-ink-950"
        >
          Continue Lesson
        </Link>
      </div>
    </section>
  );
}
