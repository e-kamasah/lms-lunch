import { ClipboardList, FileText, BookOpenCheck, MoreHorizontal } from 'lucide-react';
import type { UpcomingTask } from '../../types';
import clsx from '../../lib/clsx';

const iconMap = {
  exam: { Icon: ClipboardList, tone: 'bg-error-container text-error' },
  report: { Icon: FileText, tone: 'bg-secondary-fixed text-secondary' },
  reading: { Icon: BookOpenCheck, tone: 'bg-surface-container-high text-outline' },
} as const;

interface UpcomingPanelProps {
  tasks: UpcomingTask[];
}

export default function UpcomingPanel({ tasks }: UpcomingPanelProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-surface-variant bg-surface-container-lowest p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-lg font-bold text-on-surface">Upcoming</h2>
        <button aria-label="More options" className="text-on-surface-variant">
          <MoreHorizontal size={18} />
        </button>
      </div>
      <ul className="flex flex-col gap-4">
        {tasks.map((task) => {
          const { Icon, tone } = iconMap[task.icon];
          const isCompleted = task.status === 'completed';
          return (
            <li key={task.id} className="flex items-start gap-3">
              <span className={clsx('flex h-9 w-9 shrink-0 items-center justify-center rounded-full', tone)}>
                <Icon size={18} />
              </span>
              <div>
                <p
                  className={clsx(
                    'text-sm font-semibold text-on-surface',
                    isCompleted && 'text-on-surface-variant line-through'
                  )}
                >
                  {task.title}
                </p>
                <p className="text-xs text-on-surface-variant">{task.meta}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
