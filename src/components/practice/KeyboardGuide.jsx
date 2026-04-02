const rows = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', ';']
];

const hindiRows = [
  [
    { key: '`', primary: '़', shift: 'ॐ' },
    { key: '1', primary: '१', shift: '!' },
    { key: '2', primary: '२', shift: '@' },
    { key: '3', primary: '३', shift: '#' },
    { key: '4', primary: '४', shift: '$' },
    { key: '5', primary: '५', shift: '%' },
    { key: '6', primary: '६', shift: '^' },
    { key: '7', primary: '७', shift: '&' },
    { key: '8', primary: '८', shift: '*' },
    { key: '9', primary: '९', shift: '(' },
    { key: '0', primary: '०', shift: ')' },
    { key: '-', primary: '-', shift: '_' },
    { key: '=', primary: 'ृ', shift: 'ऋ' }
  ],
  [
    { key: 'Q', primary: 'ौ', shift: 'औ' },
    { key: 'W', primary: 'ै', shift: 'ऐ' },
    { key: 'E', primary: 'ा', shift: 'आ' },
    { key: 'R', primary: 'ी', shift: 'ई' },
    { key: 'T', primary: 'ू', shift: 'ऊ' },
    { key: 'Y', primary: 'ब', shift: 'भ' },
    { key: 'U', primary: 'ह', shift: 'ङ' },
    { key: 'I', primary: 'ग', shift: 'घ' },
    { key: 'O', primary: 'द', shift: 'ध' },
    { key: 'P', primary: 'ज', shift: 'झ' },
    { key: '[', primary: 'ड', shift: 'ढ' },
    { key: ']', primary: '़', shift: 'ञ' },
    { key: '\\', primary: 'ॉ', shift: 'ऑ' }
  ],
  [
    { key: 'A', primary: 'ो', shift: 'ओ' },
    { key: 'S', primary: 'े', shift: 'ए' },
    { key: 'D', primary: '्', shift: 'अ' },
    { key: 'F', primary: 'ि', shift: 'इ' },
    { key: 'G', primary: 'ु', shift: 'उ' },
    { key: 'H', primary: 'प', shift: 'फ' },
    { key: 'J', primary: 'र', shift: 'ऱ' },
    { key: 'K', primary: 'क', shift: 'ख' },
    { key: 'L', primary: 'त', shift: 'थ' },
    { key: ';', primary: 'च', shift: 'छ' },
    { key: "'", primary: 'ट', shift: 'ठ' }
  ],
  [
    { key: 'Z', primary: 'ं', shift: 'ँ' },
    { key: 'X', primary: 'म', shift: 'ण' },
    { key: 'C', primary: 'न', shift: 'ऩ' },
    { key: 'V', primary: 'व', shift: 'ॲ' },
    { key: 'B', primary: 'ल', shift: 'ळ' },
    { key: 'N', primary: 'स', shift: 'श' },
    { key: 'M', primary: ',', shift: 'ष' },
    { key: ',', primary: '।', shift: '॥' },
    { key: '.', primary: '.', shift: '?' },
    { key: '/', primary: 'य', shift: 'य़' }
  ]
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
              {row.map((cell) => {
                const active = activeHindiKeys.has(cell.primary) || activeHindiKeys.has(cell.shift);
                return (
                  <span
                    key={cell.key}
                    className={`inline-flex min-h-12 min-w-10 flex-col items-center justify-center rounded-md border px-2 py-1 text-[10px] font-semibold ${
                      active
                        ? 'border-ocean-500/60 bg-ocean-500/25 text-ocean-100'
                        : 'border-white/10 bg-white/5 text-slate-400'
                    }`}
                  >
                    <span className="text-[9px] uppercase text-slate-400">{cell.key}</span>
                    <span className="text-xs text-slate-100">{cell.primary}</span>
                    <span className="text-[9px] text-slate-400">{cell.shift}</span>
                  </span>
                );
              })}
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-slate-400">
          Active lesson keys: <span className="font-semibold text-slate-200">{keysPracticed}</span>
        </div>
        <p className="mt-2 text-[11px] text-slate-500">
          Layout reference: Hindi InScript-style key positions with primary and Shift characters.
        </p>
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
