import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-950/80 py-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>Typing Academy © {year}</p>
        <div className="flex gap-4">
          <Link to="/lessons" className="hover:text-white">
            Lessons
          </Link>
          <Link to="/dashboard" className="hover:text-white">
            Dashboard
          </Link>
          <Link to="/about" className="hover:text-white">
            Help
          </Link>
        </div>
      </div>
    </footer>
  );
}
