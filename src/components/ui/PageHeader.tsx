import type { LucideIcon } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
}

export default function PageHeader({ title, description, icon: Icon }: PageHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      {Icon && (
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-container/10 text-primary">
          <Icon size={24} />
        </span>
      )}
      <div>
        <h1 className="font-display text-2xl font-extrabold text-on-surface md:text-3xl">{title}</h1>
        {description && <p className="mt-1 text-on-surface-variant">{description}</p>}
      </div>
    </div>
  );
}
