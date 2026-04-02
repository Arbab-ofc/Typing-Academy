import { NavLink } from 'react-router-dom';

export default function MobileMenu({ isOpen, links, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="px-4 pb-4 pt-2 md:hidden">
      <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-panel">
        <div className="border-b border-white/10 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Navigation</p>
        </div>

        <nav className="grid gap-2 p-3">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? 'border-ocean-500/40 bg-ocean-500/20 text-white'
                    : 'border-white/10 text-slate-200 hover:bg-white/10 hover:text-white'
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
