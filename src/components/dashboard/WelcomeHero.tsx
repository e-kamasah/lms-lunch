import type { AppUser } from '../../types';

interface WelcomeHeroProps {
  user: AppUser;
}

export default function WelcomeHero({ user }: WelcomeHeroProps) {
  return (
    <section
      className="relative overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] md:p-10"
      style={{
        backgroundImage:
          'repeating-linear-gradient(135deg, rgba(0,64,224,0.03) 0 2px, transparent 2px 18px)',
      }}
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-on-surface md:text-4xl">
            Welcome, {user.greetingName}! 
          </h1>
          <p className="mt-3 max-w-xl text-base text-on-surface-variant md:text-lg">
            You're making great progress. Keep pushing towards your WASSCE goals.
          </p>
        </div>

        <div className="flex shrink-0 items-stretch divide-x divide-outline-variant overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest">
          <div className="flex flex-col items-center justify-center px-6 py-4">
            <p className="text-center text-xs font-bold uppercase tracking-wide text-on-surface-variant">
              Weekly
              <br />
              Goal
            </p>
            <p className="mt-1 text-2xl font-extrabold text-primary">{user.weeklyGoalPercent}%</p>
          </div>
          <div className="flex flex-col items-center justify-center px-6 py-4">
            <p className="text-center text-xs font-bold uppercase tracking-wide text-on-surface-variant">
              Study Streak
            </p>
            <p className="mt-1 text-2xl font-extrabold text-on-surface">{user.studyStreakDays} Days</p>
          </div>
        </div>
      </div>
    </section>
  );
}
