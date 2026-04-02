export default function DashboardStatCard({ label, value, hint }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.15em] text-slate-400">{label}</p>
      <p className="mt-2 font-display text-3xl font-semibold text-white">{value}</p>
      {hint ? <p className="mt-1 text-xs text-slate-400">{hint}</p> : null}
    </article>
  );
}
