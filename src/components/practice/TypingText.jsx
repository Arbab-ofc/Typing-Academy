export default function TypingText({ targetText, typedText, activeIndex }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-ink-900/70 p-5 text-lg leading-8 sm:text-xl sm:leading-9">
      {targetText.split('').map((char, index) => {
        let className = 'text-slate-500';
        if (index < typedText.length) {
          className = typedText[index] === char ? 'text-mint-300' : 'text-rose-300 bg-rose-500/20 rounded';
        } else if (index === activeIndex) {
          className = 'bg-ocean-500/25 text-white rounded';
        }

        return (
          <span key={`${char}-${index}`} className={`font-mono ${className}`}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </div>
  );
}
