export default function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.08]">
      <div className="inline-flex rounded-lg bg-ocean-500/15 p-2 text-ocean-400">
        <Icon size={18} />
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </article>
  );
}
