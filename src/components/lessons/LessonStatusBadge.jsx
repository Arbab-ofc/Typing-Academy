import { FiCheckCircle, FiLock, FiPlayCircle, FiUnlock } from 'react-icons/fi';

const styleMap = {
  completed: {
    label: 'Completed',
    className: 'border-mint-500/40 bg-mint-500/15 text-mint-300',
    icon: FiCheckCircle
  },
  current: {
    label: 'Current',
    className: 'border-ocean-500/40 bg-ocean-500/15 text-ocean-300',
    icon: FiPlayCircle
  },
  unlocked: {
    label: 'Unlocked',
    className: 'border-white/20 bg-white/10 text-slate-200',
    icon: FiUnlock
  },
  locked: {
    label: 'Locked',
    className: 'border-white/10 bg-white/5 text-slate-400',
    icon: FiLock
  }
};

export default function LessonStatusBadge({ status }) {
  const meta = styleMap[status] || styleMap.locked;
  const Icon = meta.icon;

  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold ${meta.className}`}>
      <Icon size={12} />
      {meta.label}
    </span>
  );
}
