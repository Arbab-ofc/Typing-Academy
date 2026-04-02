import { useEffect, useRef } from 'react';

export default function TypingInput({ value, onChange, disabled, transliterationHint }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [disabled]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <label htmlFor="typing-input" className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        Type Here
      </label>
      <textarea
        id="typing-input"
        ref={inputRef}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        placeholder="Start typing to begin the timer..."
        aria-describedby="typing-input-help"
        className="h-28 w-full resize-none rounded-xl border border-white/10 bg-ink-900 p-3 font-mono text-sm text-white outline-none transition focus:border-ocean-500"
      />
      <p id="typing-input-help" className="mt-2 text-xs text-slate-400">
        Timer starts on your first keypress. Backspace is supported.
        {transliterationHint ? ` ${transliterationHint}` : ''}
      </p>
    </div>
  );
}
