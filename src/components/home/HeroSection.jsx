import { Link } from 'react-router-dom';
import { FiArrowRight, FiBarChart2, FiPlayCircle } from 'react-icons/fi';

export default function HeroSection({ currentLessonId }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-ink-900 via-ink-900 to-ink-800 p-6 shadow-panel sm:p-8 lg:p-10">
      <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-ocean-500/20 blur-3xl" aria-hidden />
      <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-mint-500/20 blur-3xl" aria-hidden />

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ocean-400">Structured Typewriting Course</p>
          <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            Build professional typing speed through 50 guided lessons.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Typing Academy helps you master posture, finger placement, row drills, punctuation, and real-world
            typing fluency with a calm, lesson-first learning journey.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/lessons"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-ocean-500 to-mint-500 px-5 py-3 text-sm font-bold text-ink-950 transition hover:brightness-110"
            >
              Start Learning
              <FiArrowRight />
            </Link>
            <Link
              to={`/lessons/${currentLessonId}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <FiPlayCircle />
              Continue Lesson
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-ocean-400/60 hover:text-white"
            >
              <FiBarChart2 />
              View Progress
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Learning Path</p>
          <ol className="mt-4 space-y-3 text-sm text-slate-200">
            <li>01. Foundations and posture discipline</li>
            <li>02. Home, top, and bottom row mastery</li>
            <li>03. Shift, capitals, numbers, symbols</li>
            <li>04. Sentence and paragraph fluency</li>
            <li>05. Speed and accuracy challenges</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
