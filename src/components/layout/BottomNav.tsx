import { NavLink } from 'react-router-dom';
import { bottomNavItems } from './navConfig';
import clsx from '../../lib/clsx';

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-xl bg-surface px-4 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
      {bottomNavItems.map(({ label, path, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          end={path === '/'}
          className={({ isActive }) =>
            clsx(
              'flex flex-col items-center justify-center rounded-2xl px-4 py-2 text-[11px] font-semibold transition-transform duration-200 active:scale-95',
              isActive ? 'bg-primary-container text-on-primary-container' : 'text-on-surface-variant'
            )
          }
        >
          <Icon size={22} className="mb-1" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
