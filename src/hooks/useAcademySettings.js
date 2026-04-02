import { useState } from 'react';
import { loadSettings, saveSettings } from '../utils/storage';

export default function useAcademySettings() {
  const [settings, setSettings] = useState(() => loadSettings());

  const updateSetting = (key, value) => {
    setSettings((prev) => {
      const next = { ...prev, [key]: value };
      saveSettings(next);
      return next;
    });
  };

  return {
    settings,
    updateSetting
  };
}
