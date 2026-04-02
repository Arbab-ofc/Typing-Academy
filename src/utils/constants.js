export const STORAGE_KEYS = {
  progress: 'typing_academy_progress_v1',
  settings: 'typing_academy_settings_v1',
  recentResult: 'typing_academy_recent_result_v1'
};

export const TOTAL_LESSONS = 50;

export const DEFAULT_SETTINGS = {
  soundEnabled: false,
  theme: 'dark',
  textSize: 'md',
  panelSize: 'comfortable',
  hindiTransliterationEnabled: false
};

export const INITIAL_PROGRESS = {
  activeLanguage: 'english',
  languages: {
    english: {
      completedLessons: [],
      unlockedLessons: [1],
      currentLesson: 1,
      lessonStats: {},
      totalSessions: 0,
      totalPracticeTime: 0,
      history: [],
      achievements: []
    },
    hindi: {
      completedLessons: [],
      unlockedLessons: [1],
      currentLesson: 1,
      lessonStats: {},
      totalSessions: 0,
      totalPracticeTime: 0,
      history: [],
      achievements: []
    }
  }
};
