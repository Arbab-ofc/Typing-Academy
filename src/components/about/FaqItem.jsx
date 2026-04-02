import { useState } from 'react';

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-semibold text-slate-100">{question}</span>
        <span className="text-slate-400">{open ? '-' : '+'}</span>
      </button>
      {open ? <p className="mt-2 text-sm text-slate-300">{answer}</p> : null}
    </div>
  );
}
