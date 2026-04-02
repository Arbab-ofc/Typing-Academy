export const ACHIEVEMENT_DEFINITIONS = [
  { id: 'first-lesson', label: 'First Lesson Completed', test: (s) => s.completedCount >= 1 },
  { id: 'ten-lessons', label: '10 Lessons Completed', test: (s) => s.completedCount >= 10 },
  { id: 'twenty-five-lessons', label: '25 Lessons Completed', test: (s) => s.completedCount >= 25 },
  { id: 'fifty-lessons', label: '50 Lessons Completed', test: (s) => s.completedCount >= 50 },
  { id: 'hundred-lessons', label: '100 Lessons Completed', test: (s) => s.completedCount >= 100 },
  { id: 'accuracy-95', label: 'Accuracy Ace', test: (s) => s.averageAccuracy >= 95 },
  { id: 'speed-35', label: 'Speed Burst', test: (s) => s.bestWpm >= 35 }
];

export function deriveAchievements(summary) {
  return ACHIEVEMENT_DEFINITIONS.filter((achievement) => achievement.test(summary)).map((a) => a.id);
}
