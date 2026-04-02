export default function CategoryPreview({ categories }) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <span
          key={category}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-200"
        >
          {category}
        </span>
      ))}
    </div>
  );
}
