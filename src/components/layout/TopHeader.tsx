import { Search, Bell, UserCircle2 } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';
import { currentUser } from '../../data/dashboard';
import clsx from '../../lib/clsx';

export default function TopHeader() {
  const { language, setLanguage } = useAppStore();

  return (
    <header className="sticky top-0 z-30 hidden w-full items-center justify-between gap-4 bg-surface px-6 py-4 shadow-sm md:flex lg:px-10">
      <div className="relative flex max-w-md flex-1 items-center">
        <Search className="pointer-events-none absolute left-3 text-outline" size={18} />
        <input
          type="text"
          placeholder="Search courses, peers..."
          className="w-full rounded-full border border-outline-variant bg-surface-container-lowest py-2 pl-10 pr-4 text-sm text-on-surface outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1 rounded-full border border-outline-variant bg-surface-container-low p-1">
          {(['EN', 'FR'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={clsx(
                'rounded-full px-3 py-1 text-xs font-bold transition-all duration-150',
                language === lang
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-primary'
              )}
            >
              {lang}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            aria-label="Notifications"
            className="relative text-on-surface transition-colors hover:text-primary"
          >
            <Bell size={22} />
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-error" />
          </button>
          <button aria-label="Account" className="text-on-surface transition-colors hover:text-primary">
            {currentUser.avatarUrl ? (
              <img
                src={currentUser.avatarUrl}
                alt={currentUser.name}
                className="h-9 w-9 rounded-full border-2 border-primary-container object-cover"
              />
            ) : (
              <UserCircle2 size={28} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
