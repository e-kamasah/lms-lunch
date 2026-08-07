import clsx from '../../lib/clsx';
import type { CourseLevel } from '../../types';

type LevelOption = 'All' | CourseLevel;

const options: LevelOption[] = ['All', 'SHS', 'Tertiary'];

interface LevelFilterTabsProps {
  value: LevelOption;
  onChange: (value: LevelOption) => void;
}

export default function LevelFilterTabs({ value, onChange }: LevelFilterTabsProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="hidden text-sm font-semibold text-on-surface md:inline">Filter by Level:</span>
      <div className="flex items-center gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={clsx(
              'rounded-full px-4 py-1.5 text-sm font-bold transition-colors',
              value === option
                ? 'bg-primary text-on-primary'
                : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
            )}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
