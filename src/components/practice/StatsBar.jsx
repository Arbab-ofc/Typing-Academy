import { formatDuration } from '../../utils/typing';

export default function StatsBar({ elapsedSeconds, metrics }) {
  const stats = [
    { label: 'Time', value: formatDuration(elapsedSeconds) },
    { label: 'WPM', value: metrics.wpm },
    { label: 'Accuracy', value: `${metrics.accuracy}%` },
    { label: 'Mistakes', value: metrics.mistakes },
    { label: 'Progress', value: `${metrics.progress}%` }
  ];

  return (
    <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-5">
      {stats.map((item) => (
        <article key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
          <p className="mt-1 font-display text-xl font-semibold text-white">{item.value}</p>
        </article>
      ))}
    </div>
  );
}
