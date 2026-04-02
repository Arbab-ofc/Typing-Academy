const KEYBOARD_ROWS = [
  [
    { label: '`', value: '`' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '0', value: '0' },
    { label: '-', value: '-' },
    { label: '=', value: '=' },
    { label: 'Backspace', shortLabel: 'Bksp', value: 'BACKSPACE', width: 'min-w-[6.2rem]' }
  ],
  [
    { label: 'Tab', shortLabel: 'Tab', value: 'TAB', width: 'min-w-[4.2rem]' },
    { label: 'Q', value: 'Q' },
    { label: 'W', value: 'W' },
    { label: 'E', value: 'E' },
    { label: 'R', value: 'R' },
    { label: 'T', value: 'T' },
    { label: 'Y', value: 'Y' },
    { label: 'U', value: 'U' },
    { label: 'I', value: 'I' },
    { label: 'O', value: 'O' },
    { label: 'P', value: 'P' },
    { label: '[', value: '[' },
    { label: ']', value: ']' },
    { label: '\\', value: '\\', width: 'min-w-[4rem]' }
  ],
  [
    { label: 'Caps', shortLabel: 'Caps', value: 'CAPSLOCK', width: 'min-w-[5.2rem]' },
    { label: 'A', value: 'A' },
    { label: 'S', value: 'S' },
    { label: 'D', value: 'D' },
    { label: 'F', value: 'F' },
    { label: 'G', value: 'G' },
    { label: 'H', value: 'H' },
    { label: 'J', value: 'J' },
    { label: 'K', value: 'K' },
    { label: 'L', value: 'L' },
    { label: ';', value: ';' },
    { label: "'", value: "'" },
    { label: 'Enter', shortLabel: 'Ent', value: 'ENTER', width: 'min-w-[5.6rem]' }
  ],
  [
    { label: 'Shift', shortLabel: 'Shft', value: 'SHIFT', width: 'min-w-[6.4rem]' },
    { label: 'Z', value: 'Z' },
    { label: 'X', value: 'X' },
    { label: 'C', value: 'C' },
    { label: 'V', value: 'V' },
    { label: 'B', value: 'B' },
    { label: 'N', value: 'N' },
    { label: 'M', value: 'M' },
    { label: ',', value: ',' },
    { label: '.', value: '.' },
    { label: '/', value: '/' },
    { label: 'Shift', shortLabel: 'Shft', value: 'SHIFT', width: 'min-w-[6.4rem]' }
  ],
  [
    { label: 'Ctrl', shortLabel: 'Ctl', value: 'CTRL', width: 'min-w-[3.8rem]' },
    { label: 'Win', value: 'META', width: 'min-w-[3.8rem]' },
    { label: 'Alt', value: 'ALT', width: 'min-w-[3.8rem]' },
    { label: 'Space', shortLabel: 'Spc', value: 'SPACE', width: 'min-w-[18rem]' },
    { label: 'Alt', value: 'ALT', width: 'min-w-[3.8rem]' },
    { label: 'Fn', value: 'FN', width: 'min-w-[3.8rem]' },
    { label: 'Ctrl', shortLabel: 'Ctl', value: 'CTRL', width: 'min-w-[3.8rem]' }
  ]
];

const HOME_ROW = 'ASDFGHJKL;';
const TOP_ROW = 'QWERTYUIOP[]\\';
const BOTTOM_ROW = 'ZXCVBNM,./';
const NUMBER_ROW = '1234567890-=';
const SYMBOLS = '`-=[]\\;\',./';

function getActiveKeys(keysPracticed) {
  const normalized = (keysPracticed || '').toUpperCase();
  const active = new Set();

  const activateChars = (chars) => {
    chars.split('').forEach((char) => active.add(char));
  };

  if (normalized.includes('HOME ROW')) activateChars(HOME_ROW);
  if (normalized.includes('TOP ROW')) activateChars(TOP_ROW);
  if (normalized.includes('BOTTOM ROW')) activateChars(BOTTOM_ROW);
  if (normalized.includes('NUMBER ROW')) activateChars(NUMBER_ROW);
  if (normalized.includes('NUMBERS')) activateChars(NUMBER_ROW);
  if (normalized.includes('SYMBOL')) activateChars(SYMBOLS);
  if (normalized.includes('SHIFT')) active.add('SHIFT');
  if (normalized.includes('SPACE')) active.add('SPACE');
  if (normalized.includes('TAB')) active.add('TAB');
  if (normalized.includes('ENTER')) active.add('ENTER');
  if (normalized.includes('CAPS')) active.add('CAPSLOCK');
  if (normalized.includes('BACKSPACE')) active.add('BACKSPACE');
  if (normalized.includes('CTRL')) active.add('CTRL');
  if (normalized.includes('ALT')) active.add('ALT');

  normalized.split('').forEach((char) => {
    if (char.trim()) active.add(char);
  });

  return active;
}

export default function KeyboardGuide({ keysPracticed }) {
  const activeKeys = getActiveKeys(keysPracticed);

  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4">
      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Keyboard Guide</p>
      <div className="mt-3 overflow-hidden">
        <div className="mx-auto w-max origin-top scale-[0.52] transform-gpu sm:scale-[0.7] md:scale-[0.85] lg:scale-100">
          <div className="flex flex-col items-center gap-2">
          {KEYBOARD_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-2">
            {row.map((key) => {
              const active = activeKeys.has(key.value);
              return (
                <span
                  key={`${key.label}-${key.value}-${rowIndex}`}
                  className={`inline-flex h-10 min-w-10 items-center justify-center rounded-md border px-3 text-sm font-semibold ${
                    key.width || 'min-w-10'
                  } ${
                    active
                      ? 'border-ocean-500/60 bg-ocean-500/25 text-ocean-100'
                      : 'border-white/10 bg-white/5 text-slate-400'
                  }`}
                >
                  {key.label}
                </span>
              );
            })}
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
