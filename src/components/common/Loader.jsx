import { RotatingLines } from 'react-loader-spinner';

export default function Loader({ label = 'Loading...' }) {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5">
      <RotatingLines width="42" strokeColor="#34c8ff" strokeWidth="4" animationDuration="0.8" />
      <p className="text-sm text-slate-300">{label}</p>
    </div>
  );
}
