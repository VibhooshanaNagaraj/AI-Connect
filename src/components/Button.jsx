import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = true,
  className = '',
  type = 'button',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-red/40 active:scale-[0.98] select-none';

  const sizes = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-xs gap-2',
    lg: 'px-7 py-3.5 text-sm gap-2.5 font-bold',
  };

  const variants = {
    primary:
      'bg-brand-red hover:bg-brand-red-bright text-white shadow-red-glow hover:shadow-red-glow-lg border border-brand-red/30 group',
    secondary:
      'bg-dark-surface hover:bg-dark-hover text-white border border-dark-border hover:border-brand-red/50 shadow-sm group',
    outline:
      'bg-transparent text-white border border-dark-border hover:border-brand-red hover:bg-brand-red/10 group',
    ghost:
      'bg-transparent text-secondary-text hover:text-white group',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && (
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 text-current shrink-0" />
      )}
    </button>
  );
}
