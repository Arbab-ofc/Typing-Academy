export default function PagePlaceholder({ title, description }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-panel">
      <h1 className="font-display text-3xl font-semibold text-white">{title}</h1>
      <p className="mt-3 max-w-2xl text-slate-300">{description}</p>
    </section>
  );
}
