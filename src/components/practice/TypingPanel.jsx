import { Link } from 'react-router-dom';
import TypingText from './TypingText';
import TypingInput from './TypingInput';
import StatsBar from './StatsBar';
import KeyboardGuide from './KeyboardGuide';

export default function TypingPanel({ lesson, session, onComplete }) {
  const {
    typedText,
    elapsedSeconds,
    metrics,
    isStarted,
    isComplete,
    activeIndex,
    completionMeta,
    onTextChange,
    restart
  } = session;

  return (
    <div className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
      <StatsBar elapsedSeconds={elapsedSeconds} metrics={metrics} />

      {!isStarted ? (
        <p className="rounded-xl border border-dashed border-white/20 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
          Start typing to begin the timer. Focus on accuracy first, then increase speed.
        </p>
      ) : null}

      <TypingText targetText={lesson.content} typedText={typedText} activeIndex={activeIndex} />
      <TypingInput value={typedText} onChange={onTextChange} disabled={isComplete} />

      <KeyboardGuide keysPracticed={lesson.keysPracticed} />

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={restart}
          className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
        >
          Restart
        </button>
        <Link
          to="/lessons"
          className="rounded-xl border border-white/20 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
        >
          Back to Lessons
        </Link>
      </div>

      {isComplete ? (
        <div className="rounded-2xl border border-white/15 bg-ink-900 p-4">
          <p className="font-display text-xl font-semibold text-white">Lesson Complete</p>
          <p className="mt-2 text-sm text-slate-300">
            {completionMeta.passed
              ? 'Great work. You passed the lesson requirements.'
              : `You can do better. Target ${completionMeta.requiredAccuracy}% accuracy and ${completionMeta.requiredWpm} WPM.`}
          </p>
          <button
            type="button"
            onClick={onComplete}
            className="mt-4 rounded-xl bg-gradient-to-r from-ocean-500 to-mint-500 px-4 py-2 text-sm font-bold text-ink-950"
          >
            View Results
          </button>
        </div>
      ) : null}
    </div>
  );
}
