import { NavLink } from 'react-router-dom';

export default function MobileMenu({ isOpen, links, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="px-4 pb-4 pt-2 md:hidden">
      <div className="overflow-hidden rounded-2xl border border-white/15 bg-ink-900/95 shadow-panel backdrop-blur">
        <div className="border-b border-white/10 px-4 py-3">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">Menu</p>
        </div>

        <nav className="grid gap-1 p-2">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-gradient-to-r from-ocean-500/30 to-mint-500/30 text-white'
                    : 'text-slate-200 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
