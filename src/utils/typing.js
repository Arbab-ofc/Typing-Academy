export function calculateWpm(typedCharacters, elapsedSeconds) {
  if (!typedCharacters || !elapsedSeconds) return 0;
  const minutes = elapsedSeconds / 60;
  return Math.round((typedCharacters / 5) / minutes);
}

export function calculateAccuracy(correctCharacters, typedCharacters) {
  if (!typedCharacters) return 100;
  return Math.max(0, Math.round((correctCharacters / typedCharacters) * 100));
}

export function calculateProgress(typedLength, totalLength) {
  if (!totalLength) return 0;
  return Math.min(100, Math.round((typedLength / totalLength) * 100));
}

export function formatDuration(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
  const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

export function evaluateLessonCompletion(accuracy, wpm, lessonId) {
  const requiredAccuracy = lessonId >= 47 ? 95 : 90;
  const requiredWpm = lessonId <= 8 ? 8 : lessonId >= 43 ? 24 : 14;
  const passed = accuracy >= requiredAccuracy && wpm >= requiredWpm;

  return {
    passed,
    requiredAccuracy,
    requiredWpm
  };
}
