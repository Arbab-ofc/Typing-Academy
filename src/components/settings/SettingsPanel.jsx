export default function SettingsPanel({ title, description, children }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
      {description ? <p className="mt-1 text-sm text-slate-300">{description}</p> : null}
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}
