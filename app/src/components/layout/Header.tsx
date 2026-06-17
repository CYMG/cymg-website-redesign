import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useScrollState } from '@/hooks/useScrollState';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Working Groups', href: '/working-groups' },
  { label: 'UNEA', href: '/unea-and-core-processes' },
  { label: 'About', href: '/about' },
  { label: 'Join', href: '/join' },
];

export default function Header() {
  const { isDark, toggle } = useDarkMode();
  const { isPastThreshold } = useScrollState();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isPastThreshold || !isHome
            ? 'backdrop-blur-xl border-b'
            : 'bg-transparent'
        )}
        style={{
          backgroundColor: isPastThreshold || !isHome ? 'var(--surface)' : 'transparent',
          borderColor: isPastThreshold || !isHome ? 'var(--line)' : 'transparent',
          opacity: isPastThreshold || !isHome ? 0.95 : 1,
        }}
      >
        <div className="max-w-[1320px] mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex flex-col items-start leading-tight">
            <span
              className="font-display text-xl font-bold tracking-tight"
              style={{ color: 'var(--ink)' }}
            >
              CYMG
            </span>
            <span
              className="text-mono-sm hidden sm:block"
              style={{ color: 'var(--ink-60)' }}
            >
              Children and Youth Major Group to UNEP
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-mono-label px-4 py-2 rounded-full transition-all duration-200',
                  'hover:opacity-80',
                  location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                    ? 'font-medium'
                    : ''
                )}
                style={{
                  color: location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                    ? 'var(--assembly-blue)'
                    : 'var(--ink)',
                  backgroundColor: location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                    ? 'var(--assembly-blue)'
                    : 'transparent',
                  opacity: location.pathname === item.href || location.pathname.startsWith(item.href + '/') ? 1 : 0.8,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              className="p-2 rounded-full transition-colors duration-200 hover:opacity-70"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{ color: 'var(--ink)' }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className="md:hidden p-2 rounded-full transition-colors duration-200 hover:opacity-70"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              style={{ color: 'var(--ink)' }}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ backgroundColor: 'var(--surface)' }}
        >
          <div className="pt-20 px-6 pb-8 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-h3 font-display py-3 border-b transition-colors"
                style={{
                  color: location.pathname === item.href ? 'var(--assembly-blue)' : 'var(--ink)',
                  borderColor: 'var(--line)',
                }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Link
                to="/blog"
                onClick={() => setMobileOpen(false)}
                className="text-body-lg py-2"
                style={{ color: 'var(--ink-60)' }}
              >
                Blog
              </Link>
              <Link
                to="/calendar"
                onClick={() => setMobileOpen(false)}
                className="text-body-lg py-2"
                style={{ color: 'var(--ink-60)' }}
              >
                Calendar
              </Link>
              <Link
                to="/documents"
                onClick={() => setMobileOpen(false)}
                className="text-body-lg py-2"
                style={{ color: 'var(--ink-60)' }}
              >
                Documents
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="text-body-lg py-2"
                style={{ color: 'var(--ink-60)' }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
