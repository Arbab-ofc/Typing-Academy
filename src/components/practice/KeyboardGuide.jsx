const rows = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', ';']
];

const hindiRows = [
  ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ'],
  ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ'],
  ['ट', 'ठ', 'ड', 'ढ', 'ण', 'त', 'थ', 'द', 'ध', 'न'],
  ['प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह'],
  ['ं', 'ः', 'ँ', '्', '।', ',', '?', '!', '०', '१', '२', '३']
];

function getActiveHindiKeys(keysPracticed) {
  const input = String(keysPracticed || '');
  const tokens = input
    .split(/[\s,+/]+/)
    .map((token) => token.trim())
    .filter(Boolean);

  const chars = input.split('').filter((char) => /[\u0900-\u097F]/.test(char));
  return new Set([...tokens, ...chars]);
}

export default function KeyboardGuide({ keysPracticed, language = 'english' }) {
  if (language === 'hindi') {
    const activeHindiKeys = getActiveHindiKeys(keysPracticed);

    return (
      <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Hindi Keyboard Guide</p>
        <div className="mt-3 space-y-2">
          {hindiRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap gap-2">
              {row.map((key) => {
                const active = activeHindiKeys.has(key);
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
        <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-slate-400">
          Active lesson keys: <span className="font-semibold text-slate-200">{keysPracticed}</span>
        </div>
      </section>
    );
  }

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
