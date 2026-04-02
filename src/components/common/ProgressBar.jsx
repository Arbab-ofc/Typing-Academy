export default function ProgressBar({ value, label }) {
  return (
    <div className="w-full">
      {label ? (
        <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
          <span>{label}</span>
          <span>{value}%</span>
        </div>
      ) : null}
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-ocean-500 to-mint-500 transition-all duration-500"
          style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
        />
      </div>
    </div>
  );
}
