import { NavLink } from 'react-router-dom';
import { primaryNavItems, secondaryNavItems } from './navConfig';
import clsx from '../../lib/clsx';

export default function Sidebar() {
  return (
    <nav className="sticky top-0 hidden h-screen w-[280px] shrink-0 flex-col gap-4 border-r border-outline-variant bg-surface-container px-4 py-8 md:flex">
      <div className="mb-4 px-4">
        <p className="font-display text-2xl font-extrabold text-primary">LearnMate</p>
        <p className="text-xs font-medium text-on-surface-variant">Academic Excellence</p>
      </div>

      <ul className="flex flex-grow flex-col gap-2">
        {primaryNavItems.map(({ label, path, icon: Icon }) => (
          <li key={path}>
            <NavLink
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200',
                  isActive
                    ? 'border-r-4 border-primary bg-primary-container/10 text-primary'
                    : 'text-on-surface-variant hover:scale-[1.02] hover:bg-surface-container-high'
                )
              }
            >
              <Icon size={20} strokeWidth={2} />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="mt-auto flex flex-col gap-2 border-t border-outline-variant pt-4">
        {secondaryNavItems.map(({ label, path, icon: Icon }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-3 rounded-lg px-4 py-2 text-sm font-medium transition-all',
                  isActive ? 'text-primary' : 'text-on-surface-variant hover:bg-surface-container-high'
                )
              }
            >
              <Icon size={20} strokeWidth={2} />
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
