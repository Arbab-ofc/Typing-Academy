export function getLessonStatus(lessonId, progress, learningMode = 'mission') {
  if (progress.completedLessons.includes(lessonId)) return 'completed';
  if (progress.currentLesson === lessonId) return 'current';
  if (learningMode === 'unlocked') return 'unlocked';
  if (progress.unlockedLessons.includes(lessonId)) return 'unlocked';
  return 'locked';
}

export function getCurrentLesson(progress, lessons) {
  return lessons.find((lesson) => lesson.id === progress.currentLesson) || lessons[0];
}

export function getCompletedCount(progress) {
  return progress.completedLessons.length;
}

export function getRecentHistory(progress, count = 6) {
  return (progress.history || []).slice(0, count);
}
