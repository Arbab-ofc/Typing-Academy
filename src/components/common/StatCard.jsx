export default function StatCard({ label, value, subValue }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-panel transition hover:-translate-y-0.5 hover:bg-white/[0.08]">
      <p className="text-xs uppercase tracking-[0.15em] text-slate-400">{label}</p>
      <p className="mt-2 font-display text-2xl font-bold text-white">{value}</p>
      {subValue ? <p className="mt-1 text-xs text-slate-400">{subValue}</p> : null}
    </article>
  );
}
