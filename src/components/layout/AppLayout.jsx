import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useAcademyContext } from '../../hooks/useAcademyContext';
import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLayout() {
  const { settings } = useAcademyContext();

  useEffect(() => {
    document.documentElement.dataset.theme = settings.theme;
  }, [settings.theme]);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
