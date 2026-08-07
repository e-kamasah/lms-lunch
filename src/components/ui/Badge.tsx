import type { ReactNode } from 'react';
import clsx from '../../lib/clsx';

type BadgeTone = 'primary' | 'secondary' | 'tertiary' | 'neutral';

const toneStyles: Record<BadgeTone, string> = {
  primary: 'bg-primary-container text-on-primary-container',
  secondary: 'bg-secondary-container text-on-secondary-container',
  tertiary: 'bg-tertiary-container text-on-tertiary-container',
  neutral: 'bg-surface-container/90 text-on-surface backdrop-blur-sm',
};

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  icon?: ReactNode;
  className?: string;
}

export default function Badge({ children, tone = 'neutral', icon, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold tracking-wide',
        toneStyles[tone],
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
