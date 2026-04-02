import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAcademyContext } from '../../hooks/useAcademyContext';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLayout() {
  const { settings, updateSetting } = useAcademyContext();

  useEffect(() => {
    // The UI is currently optimized for dark mode only.
    document.documentElement.dataset.theme = 'dark';
    if (settings.theme !== 'dark') {
      updateSetting('theme', 'dark');
    }
  }, [settings.theme, updateSetting]);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 sm:pt-8 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
