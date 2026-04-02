import { LESSONS, LESSON_CATEGORIES } from './lessons';
import { HINDI_LESSONS, HINDI_LESSON_CATEGORIES } from './hindiLessons';

export const LANGUAGE_OPTIONS = [
  { id: 'english', label: 'English' },
  { id: 'hindi', label: 'Hindi' }
];

export const LESSONS_BY_LANGUAGE = {
  english: LESSONS,
  hindi: HINDI_LESSONS
};

export const CATEGORIES_BY_LANGUAGE = {
  english: LESSON_CATEGORIES,
  hindi: HINDI_LESSON_CATEGORIES
};

export function getLessonsByLanguage(language) {
  return LESSONS_BY_LANGUAGE[language] || LESSONS_BY_LANGUAGE.english;
}

export function getCategoriesByLanguage(language) {
  return CATEGORIES_BY_LANGUAGE[language] || CATEGORIES_BY_LANGUAGE.english;
}

export function getLessonByLanguageAndId(language, lessonId) {
  const lessons = getLessonsByLanguage(language);
  return lessons.find((lesson) => lesson.id === Number(lessonId));
}
