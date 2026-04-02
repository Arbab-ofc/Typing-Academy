export default function LessonSearch({ query, onChange }) {
  return (
    <label className="block text-sm">
      <span className="mb-2 block text-xs uppercase tracking-[0.14em] text-slate-400">Search lessons</span>
      <input
        type="text"
        value={query}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search by lesson title or keys..."
        className="w-full rounded-xl border border-white/10 bg-ink-900 px-3 py-2 text-slate-100 outline-none focus:border-ocean-500"
      />
    </label>
  );
}
