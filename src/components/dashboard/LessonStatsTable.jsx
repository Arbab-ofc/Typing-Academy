import { LESSONS } from '../../data/lessons';
import EmptyState from '../common/EmptyState';

export default function LessonStatsTable({ lessonStats }) {
  const rows = Object.entries(lessonStats)
    .map(([lessonId, stats]) => ({
      lessonId: Number(lessonId),
      title: LESSONS.find((lesson) => lesson.id === Number(lessonId))?.title ?? `Lesson ${lessonId}`,
      ...stats
    }))
    .sort((a, b) => a.lessonId - b.lessonId)
    .slice(-10)
    .reverse();

  if (!rows.length) {
    return <EmptyState title="No Lesson Stats" description="Finish at least one lesson to unlock analytics." />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead className="text-xs uppercase tracking-[0.1em] text-slate-400">
          <tr>
            <th className="pb-2 pr-4">Lesson</th>
            <th className="pb-2 pr-4">Best WPM</th>
            <th className="pb-2 pr-4">Best Accuracy</th>
            <th className="pb-2 pr-4">Sessions</th>
          </tr>
        </thead>
        <tbody className="text-slate-200">
          {rows.map((row) => (
            <tr key={row.lessonId} className="border-t border-white/10">
              <td className="py-3 pr-4">{row.title}</td>
              <td className="py-3 pr-4">{row.bestWpm}</td>
              <td className="py-3 pr-4">{row.bestAccuracy}%</td>
              <td className="py-3 pr-4">{row.sessions}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
