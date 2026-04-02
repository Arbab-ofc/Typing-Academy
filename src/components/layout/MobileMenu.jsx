import { NavLink } from 'react-router-dom';

export default function MobileMenu({ isOpen, links, onClose }) {
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
    </div>
  );
}
