import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'About' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/contact', label: 'Contact' },
];

function Navbar({ onDownload }) {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed left-0 right-0 z-50 mx-auto w-full border-b border-white/10 bg-bg/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-100">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-slate-950">A</span>
          Automation Tester
        </div>
        <nav className="hidden items-center gap-4 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm transition ${
                  isActive ? 'bg-accent text-slate-950 shadow-soft' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onDownload}
            className="hidden rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-accent hover:text-accent lg:inline-flex"
          >
            Download CV
          </button>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
