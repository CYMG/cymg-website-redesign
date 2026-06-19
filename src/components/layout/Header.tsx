import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Working Groups', href: '/working-groups' },
  { label: 'UNEA', href: '/unea-and-core-processes' },
  { label: 'Blog', href: '/blog' },
  { label: 'Team', href: '/team' },
  { label: 'Join', href: '/join' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const { isDark, toggle } = useDarkMode();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) =>
    location.pathname === href || (href !== '/' && location.pathname.startsWith(href + '/'));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--assembly-blue)]">
          <img
            src="/cymg-logo-refined.svg"
            alt="CYMG — Children and Youth Major Group"
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                'text-sm px-3 py-2 transition-colors hover:text-[var(--assembly-blue)]',
                isActive(item.href)
                  ? 'text-[var(--assembly-blue)] font-medium'
                  : 'text-ink'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="p-2 text-ink hover:text-[var(--assembly-blue)] transition-colors"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 text-ink hover:text-[var(--assembly-blue)] transition-colors"
                aria-label="Open navigation menu"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(300px,85vw)] p-0 flex flex-col bg-paper border-line"
            >
              <SheetHeader className="px-5 py-4 border-b border-line">
                <SheetTitle className="flex items-center">
                  <img src="/cymg-logo-refined.svg" alt="CYMG" className="h-8 w-auto" />
                  <span className="sr-only">CYMG — Children and Youth Major Group</span>
                </SheetTitle>
              </SheetHeader>

              <nav
                className="flex-1 overflow-y-auto flex flex-col px-4 py-4"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'px-4 py-3 text-sm transition-colors hover:text-[var(--assembly-blue)]',
                      isActive(item.href)
                        ? 'text-[var(--assembly-blue)] font-medium'
                        : 'text-ink'
                    )}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="my-3 border-t border-line" />

                <Link
                  to="/calendar"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-sm text-[var(--ink-60)] hover:text-ink transition-colors"
                >
                  Calendar
                </Link>
                <Link
                  to="/documents"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-sm text-[var(--ink-60)] hover:text-ink transition-colors"
                >
                  Documents
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
