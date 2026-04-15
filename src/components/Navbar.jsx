import { useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed left-0 right-0 z-50 mx-auto w-full border-b border-white/10 bg-bg/90 backdrop-blur-xl"
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
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
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/80 text-slate-100 transition hover:border-accent hover:text-accent lg:hidden"
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <span className="flex flex-col gap-1.5">
                <span
                  className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                    isMenuOpen ? 'translate-y-2 rotate-45' : ''
                  }`}
                />
                <span
                  className={`h-0.5 w-5 rounded-full bg-current transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-300 ${
                    isMenuOpen ? '-translate-y-2 -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
            marginTop: isMenuOpen ? 16 : 0,
          }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="overflow-hidden lg:hidden"
        >
          <nav className="rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-soft">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? 'bg-accent text-slate-950 shadow-soft' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  onDownload();
                }}
                className="mt-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-accent hover:text-accent"
              >
                Download CV
              </button>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Navbar;
