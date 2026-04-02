import { toast } from 'react-toastify';
import SectionHeader from '../components/common/SectionHeader';
import SettingSelect from '../components/settings/SettingSelect';
import SettingToggle from '../components/settings/SettingToggle';
import SettingsPanel from '../components/settings/SettingsPanel';
import { useAcademyContext } from '../hooks/useAcademyContext';
import { clearProgressData } from '../utils/storage';

export default function SettingsPage() {
  const { settings, updateSetting, resetProgress } = useAcademyContext();

  const handleReset = () => {
    const confirmed = window.confirm('Reset all progress, history, and achievements?');
    if (!confirmed) return;

    clearProgressData();
    resetProgress();
    toast.success('All progress has been reset');
  };

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
        <SectionHeader
          eyebrow="Settings"
          title="Customize your typing experience"
          description="These preferences are stored in localStorage and restored automatically."
        />
      </section>

      <SettingsPanel title="Preferences" description="Adjust behavior and readability.">
        <SettingToggle
          label="Sound Effects"
          description="Enable keystroke and completion sounds."
          checked={settings.soundEnabled}
          onChange={(value) => {
            updateSetting('soundEnabled', value);
            toast.info(`Sound ${value ? 'enabled' : 'disabled'}`);
          }}
        />

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-sm font-semibold text-white">Theme</p>
          <p className="mt-1 text-sm text-slate-300">
            Dark mode is currently enforced for best visibility across all screens.
          </p>
        </div>

        <SettingSelect
          label="Practice Text Size"
          value={settings.textSize}
          onChange={(value) => updateSetting('textSize', value)}
          options={[
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' }
          ]}
        />

        <SettingSelect
          label="Typing Panel Size"
          value={settings.panelSize}
          onChange={(value) => updateSetting('panelSize', value)}
          options={[
            { label: 'Compact', value: 'compact' },
            { label: 'Comfortable', value: 'comfortable' },
            { label: 'Spacious', value: 'spacious' }
          ]}
        />
      </SettingsPanel>

      <SettingsPanel title="Danger Zone" description="Clear all local progress data.">
        <button
          type="button"
          onClick={handleReset}
          className="rounded-xl border border-rose-400/40 bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-200 hover:bg-rose-500/20"
        >
          Reset All Progress
        </button>
      </SettingsPanel>
    </div>
  );
}
