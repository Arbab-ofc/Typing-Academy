import { INITIAL_PROGRESS, DEFAULT_SETTINGS, STORAGE_KEYS } from './constants';

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed ?? fallback;
  } catch (error) {
    return fallback;
  }
}

export function loadProgress() {
  return {
    ...INITIAL_PROGRESS,
    ...readJSON(STORAGE_KEYS.progress, INITIAL_PROGRESS)
  };
}

export function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEYS.progress, JSON.stringify(progress));
}

export function loadSettings() {
  return {
    ...DEFAULT_SETTINGS,
    ...readJSON(STORAGE_KEYS.settings, DEFAULT_SETTINGS)
  };
}

export function saveSettings(settings) {
  localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
}

export function loadRecentResult() {
  return readJSON(STORAGE_KEYS.recentResult, null);
}

export function saveRecentResult(result) {
  localStorage.setItem(STORAGE_KEYS.recentResult, JSON.stringify(result));
}

export function clearProgressData() {
  localStorage.removeItem(STORAGE_KEYS.progress);
  localStorage.removeItem(STORAGE_KEYS.recentResult);
}
