import { Link } from 'react-router-dom';
import TypingText from './TypingText';
import TypingInput from './TypingInput';
import StatsBar from './StatsBar';
import KeyboardGuide from './KeyboardGuide';

const panelClassMap = {
  compact: 'space-y-4 p-4 sm:p-5',
  comfortable: 'space-y-5 p-5 sm:p-6',
  spacious: 'space-y-6 p-6 sm:p-8'
};

export default function TypingPanel({
  lesson,
  session,
  onComplete,
  textSize = 'md',
  panelSize = 'comfortable',
  language = 'english',
  transliterationEnabled = false
}) {
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
  const motivation =
    metrics.progress < 25
      ? 'Set your rhythm. Accuracy first.'
      : metrics.progress < 60
        ? 'Great pace. Keep your shoulders relaxed.'
        : metrics.progress < 100
          ? 'Final stretch. Stay precise.'
          : 'Finished. Review your result and continue.';

  return (
    <div className={`rounded-3xl border border-white/10 bg-white/5 ${panelClassMap[panelSize] || panelClassMap.comfortable}`}>
      <StatsBar elapsedSeconds={elapsedSeconds} metrics={metrics} />
      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{motivation}</p>

      {!isStarted ? (
        <p className="rounded-xl border border-dashed border-white/20 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
          Start typing to begin the timer. Focus on accuracy first, then increase speed.
        </p>
      ) : null}

      <TypingText targetText={lesson.content} typedText={typedText} activeIndex={activeIndex} textSize={textSize} />
      <TypingInput
        value={typedText}
        onChange={onTextChange}
        disabled={isComplete}
        transliterationHint={
          language === 'hindi' && transliterationEnabled
            ? 'Hindi transliteration is on: type English letters to generate Hindi script.'
            : ''
        }
      />

      <KeyboardGuide keysPracticed={lesson.keysPracticed} language={language} />

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
