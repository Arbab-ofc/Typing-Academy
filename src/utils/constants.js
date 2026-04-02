export const STORAGE_KEYS = {
  progress: 'typing_academy_progress_v1',
  settings: 'typing_academy_settings_v1',
  recentResult: 'typing_academy_recent_result_v1'
};

export const TOTAL_LESSONS = 100;

export const DEFAULT_SETTINGS = {
  soundEnabled: false,
  theme: 'dark',
  textSize: 'md',
  panelSize: 'comfortable'
};

export const INITIAL_PROGRESS = {
  completedLessons: [],
  unlockedLessons: [1],
  currentLesson: 1,
  lessonStats: {},
  totalSessions: 0,
  totalPracticeTime: 0,
  history: [],
  achievements: []
};
