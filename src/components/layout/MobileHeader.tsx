import { Bell, Search } from 'lucide-react';
import { currentUser } from '../../data/dashboard';

interface MobileHeaderProps {
  title?: string;
}

export default function MobileHeader({ title = 'LearnMate' }: MobileHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-3 bg-surface p-4 shadow-sm md:hidden">
      <div>
        <p className="font-display text-lg font-extrabold leading-tight text-primary">{title}</p>
      </div>
      <div className="flex items-center gap-4">
        <button aria-label="Search" className="text-on-surface">
          <Search size={22} />
        </button>
        <button aria-label="Notifications" className="relative text-on-surface">
          <Bell size={22} />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-error" />
        </button>
        <img
          src={currentUser.avatarUrl}
          alt={currentUser.name}
          className="h-8 w-8 rounded-full border-2 border-primary-container object-cover"
        />
      </div>
    </header>
  );
}
