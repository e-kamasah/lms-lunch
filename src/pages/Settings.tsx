import { Settings as SettingsIcon, Globe, Bell, Lock, User } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { useAppStore } from '../store/useAppStore';
import { currentUser } from '../data/dashboard';
import clsx from '../lib/clsx';

export default function Settings() {
  const { language, setLanguage } = useAppStore();

  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader icon={SettingsIcon} title="Settings" description="Manage your account and preferences." />

      <section className="flex items-center gap-4 rounded-xl border border-surface-variant bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <img
          src={currentUser.avatarUrl}
          alt={currentUser.name}
          className="h-16 w-16 rounded-full border-2 border-primary-container object-cover"
        />
        <div>
          <p className="font-display text-lg font-bold text-on-surface">{currentUser.name}</p>
          <p className="text-sm text-on-surface-variant">SHS Student · WASSCE Prep</p>
        </div>
      </section>

      <section className="divide-y divide-surface-variant rounded-xl border border-surface-variant bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <div className="flex items-center justify-between gap-4 p-5">
          <div className="flex items-center gap-3">
            <User size={20} className="text-on-surface-variant" />
            <span className="font-semibold text-on-surface">Profile Information</span>
          </div>
          <button className="text-sm font-bold text-primary hover:underline">Edit</button>
        </div>

        <div className="flex items-center justify-between gap-4 p-5">
          <div className="flex items-center gap-3">
            <Globe size={20} className="text-on-surface-variant" />
            <span className="font-semibold text-on-surface">Language</span>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-outline-variant bg-surface-container-low p-1">
            {(['EN', 'FR'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={clsx(
                  'rounded-full px-3 py-1 text-xs font-bold transition-all',
                  language === lang ? 'bg-primary text-on-primary' : 'text-on-surface-variant'
                )}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 p-5">
          <div className="flex items-center gap-3">
            <Bell size={20} className="text-on-surface-variant" />
            <span className="font-semibold text-on-surface">Notifications</span>
          </div>
          <span className="text-sm text-on-surface-variant">On</span>
        </div>

        <div className="flex items-center justify-between gap-4 p-5">
          <div className="flex items-center gap-3">
            <Lock size={20} className="text-on-surface-variant" />
            <span className="font-semibold text-on-surface">Privacy & Security</span>
          </div>
          <button className="text-sm font-bold text-primary hover:underline">Manage</button>
        </div>
      </section>
    </div>
  );
}
