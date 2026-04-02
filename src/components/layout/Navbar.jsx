import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import MobileMenu from './MobileMenu';
import { useAcademyContext } from '../../hooks/useAcademyContext';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/lessons', label: 'Lessons' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/settings', label: 'Settings' },
  { to: '/about', label: 'Help' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { activeLanguage, setActiveLanguage, availableLanguages } = useAcademyContext();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="rounded-xl bg-gradient-to-br from-ocean-500 to-mint-500 px-2 py-1 font-display text-xs font-bold uppercase tracking-wider text-ink-950">TA</span>
          <span className="font-display text-lg font-semibold text-white">Typing Academy</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <select
            value={activeLanguage}
            onChange={(event) => setActiveLanguage(event.target.value)}
            className="rounded-lg border border-white/10 bg-ink-900 px-2 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-100"
            aria-label="Select lesson language"
          >
            {availableLanguages.map((language) => (
              <option key={language.id} value={language.id}>
                {language.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="focus-ring inline-flex rounded-lg border border-white/10 p-2 text-slate-100 md:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <MobileMenu
        isOpen={isOpen}
        links={navItems}
        onClose={() => setIsOpen(false)}
        activeLanguage={activeLanguage}
        onLanguageChange={setActiveLanguage}
        availableLanguages={availableLanguages}
      />
    </header>
  );
}
