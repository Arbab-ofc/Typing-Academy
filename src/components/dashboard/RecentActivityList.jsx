import { formatDuration } from '../../utils/typing';
import EmptyState from '../common/EmptyState';

export default function RecentActivityList({ history }) {
  if (!history.length) {
    return <EmptyState title="No Activity Yet" description="Complete a lesson to populate recent sessions." />;
  }

  return (
    <ul className="space-y-2">
      {history.map((entry, index) => (
        <li key={`${entry.lessonId}-${entry.completedAt}-${index}`} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <p className="text-sm font-semibold text-slate-100">Lesson {entry.lessonId}</p>
          <p className="mt-1 text-xs text-slate-400">
            {entry.wpm} WPM • {entry.accuracy}% accuracy • {formatDuration(entry.elapsedSeconds)}
          </p>
        </li>
      ))}
    </ul>
  );
}
