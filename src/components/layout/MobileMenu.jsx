import { NavLink } from 'react-router-dom';

export default function MobileMenu({
  isOpen,
  links,
  onClose,
  activeLanguage,
  onLanguageChange,
  availableLanguages
}) {
  if (!isOpen) return null;

  return (
    <div className="border-t border-white/10 bg-ink-900 px-4 py-3 md:hidden">
      <nav className="flex flex-col gap-2">
        {links.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onClose}
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-semibold ${
                isActive ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <label className="mt-3 block text-xs uppercase tracking-[0.1em] text-slate-400">
        Language
        <select
          value={activeLanguage}
          onChange={(event) => onLanguageChange(event.target.value)}
          className="mt-2 w-full rounded-lg border border-white/10 bg-ink-950 px-3 py-2 text-xs text-slate-100"
        >
          {availableLanguages.map((language) => (
            <option key={language.id} value={language.id}>
              {language.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
