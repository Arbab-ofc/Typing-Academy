export default function EmptyState({ title, description }) {
  return (
    <div className="rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-6 text-center">
      <p className="font-display text-lg font-semibold text-white">{title}</p>
      <p className="mt-2 text-sm text-slate-400">{description}</p>
    </div>
  );
}
