export default function CategoryFilterChips({ categories, activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange('All')}
        className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition ${
          activeCategory === 'All' ? 'bg-ocean-500 text-ink-950' : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition ${
            activeCategory === category
              ? 'bg-ocean-500 text-ink-950'
              : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
