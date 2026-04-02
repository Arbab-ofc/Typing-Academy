const rows = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', ';']
];

export default function KeyboardGuide({ keysPracticed }) {
  const normalized = (keysPracticed || '').toUpperCase();

  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Keyboard Guide</p>
      <div className="mt-3 space-y-2">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap gap-2">
            {row.map((key) => {
              const active = normalized.includes(key);
              return (
                <span
                  key={key}
                  className={`inline-flex h-8 min-w-8 items-center justify-center rounded-md border px-2 text-xs font-semibold ${
                    active
                      ? 'border-ocean-500/60 bg-ocean-500/25 text-ocean-100'
                      : 'border-white/10 bg-white/5 text-slate-400'
                  }`}
                >
                  {key}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
