import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'text' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base = 'inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm';

    const variants = {
      primary: 'bg-[var(--assembly-blue)] text-white hover:bg-[var(--assembly-blue-deep)]',
      secondary: 'bg-ink text-white hover:bg-[var(--ink-60)]',
      ghost: 'bg-transparent text-[var(--assembly-blue)] hover:bg-surface',
      outline: 'bg-transparent border border-line text-ink hover:border-[var(--assembly-blue)] hover:text-[var(--assembly-blue)]',
      text: 'bg-transparent text-[var(--assembly-blue)] underline-offset-4 hover:underline px-0 py-0',
    };

    const sizes = {
      sm: 'text-xs px-3 py-2',
      md: 'text-sm px-4 py-2.5',
      lg: 'text-sm px-5 py-3',
      icon: 'p-2',
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
