import { LESSONS } from '../data/lessons';

export function getLessonStatus(lessonId, progress) {
  if (progress.completedLessons.includes(lessonId)) return 'completed';
  if (progress.currentLesson === lessonId) return 'current';
  if (progress.unlockedLessons.includes(lessonId)) return 'unlocked';
  return 'locked';
}

export function getCurrentLesson(progress) {
  return LESSONS.find((lesson) => lesson.id === progress.currentLesson) || LESSONS[0];
}

export function getCompletedCount(progress) {
  return progress.completedLessons.length;
}

export function getRecentHistory(progress, count = 6) {
  return (progress.history || []).slice(0, count);
}
