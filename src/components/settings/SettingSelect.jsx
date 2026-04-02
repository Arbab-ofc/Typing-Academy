export default function SettingSelect({ label, value, onChange, options }) {
  return (
    <label className="block text-sm">
      <span className="mb-2 block font-semibold text-slate-100">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-xl border border-white/10 bg-ink-900 px-3 py-2 text-slate-100 outline-none focus:border-ocean-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
