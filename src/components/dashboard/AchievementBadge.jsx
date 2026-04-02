import { ACHIEVEMENT_DEFINITIONS } from '../../utils/achievements';

export default function AchievementBadge({ id }) {
  const achievement = ACHIEVEMENT_DEFINITIONS.find((item) => item.id === id);
  if (!achievement) return null;

  return (
    <div className="rounded-xl border border-mint-500/30 bg-mint-500/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-mint-200">
      {achievement.label}
    </div>
  );
}
