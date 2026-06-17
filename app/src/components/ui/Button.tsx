import { cn } from '@/lib/utils';
import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'text';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const base = 'btn-pill inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary: 'text-[#0B1220] hover:brightness-95 hover:-translate-y-0.5 active:translate-y-0',
      secondary: 'text-white hover:brightness-90 hover:-translate-y-0.5 active:translate-y-0',
      ghost: 'border hover:-translate-y-0.5 active:translate-y-0',
      text: 'underline-offset-4 hover:underline px-0 py-0',
    };

    const sizes = {
      sm: 'text-xs px-4 py-2',
      md: 'text-sm px-6 py-3',
      lg: 'text-base px-8 py-4',
    };

    const style: React.CSSProperties = {};
    if (variant === 'primary') {
      style.backgroundColor = 'var(--signal-lime)';
    } else if (variant === 'secondary') {
      style.backgroundColor = 'var(--assembly-blue)';
    } else if (variant === 'ghost') {
      style.borderColor = 'var(--assembly-blue)';
      style.color = 'var(--assembly-blue)';
    } else if (variant === 'text') {
      style.color = 'var(--assembly-blue)';
    }

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        style={style}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
