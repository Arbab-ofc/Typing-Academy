const phases = [
  { label: 'Foundations', lessons: '1-8' },
  { label: 'Top Row', lessons: '9-16' },
  { label: 'Bottom Row', lessons: '17-24' },
  { label: 'Shift & Capitals', lessons: '25-30' },
  { label: 'Numbers', lessons: '31-36' },
  { label: 'Punctuation', lessons: '37-42' },
  { label: 'Core Mastery', lessons: '43-50' },
  { label: 'Advanced Mastery', lessons: '51-100' },
  { label: 'Foundation Booster 1', lessons: '101-150' },
  { label: 'Foundation Booster 2', lessons: '151-200' },
  { label: 'Foundation Booster 3', lessons: '201-250' }
];

export default function RoadmapPreview() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {phases.map((phase) => (
          <div key={phase.label} className="rounded-xl border border-white/10 bg-ink-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Lessons {phase.lessons}</p>
            <p className="mt-2 font-display text-base font-semibold text-white">{phase.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
