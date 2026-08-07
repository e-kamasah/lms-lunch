import { CheckCircle2, Play, Lock } from 'lucide-react';
import type { SyllabusModule } from '../../types';
import ProgressBar from '../ui/ProgressBar';
import clsx from '../../lib/clsx';

interface SyllabusModuleItemProps {
  module: SyllabusModule;
}

export default function SyllabusModuleItem({ module }: SyllabusModuleItemProps) {
  if (module.status === 'current') {
    return (
      <div className="relative flex items-start gap-4 overflow-hidden rounded-xl border-y border-r border-y-surface-variant border-r-surface-variant border-l-4 border-l-primary bg-surface-container-lowest p-5 shadow-[0_8px_30px_rgba(46,91,255,0.08)]">
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-24 bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary-container shadow-md">
          <Play size={18} />
        </div>
        <div className="flex-1">
          <h4 className="mb-1 font-semibold text-on-surface">
            {module.order}. {module.title}
          </h4>
          <p className="mb-3 text-sm text-on-surface-variant">{module.description}</p>
          <ProgressBar percent={module.progressPercent ?? 0} heightClassName="h-2" />
          <span className="mt-1 block text-xs font-bold text-primary">
            {module.progressPercent}% through module
          </span>
        </div>
      </div>
    );
  }

  if (module.status === 'locked') {
    return (
      <div className="flex items-start gap-4 rounded-xl border border-surface-variant/50 bg-surface-container-low p-5 opacity-75">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-variant text-outline">
          <Lock size={18} />
        </div>
        <div>
          <h4 className="mb-1 font-semibold text-on-surface">
            {module.order}. {module.title}
          </h4>
          <p className="text-sm text-outline">{module.description}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'flex items-start gap-4 rounded-xl border border-surface-variant bg-surface-container-lowest p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
      )}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tertiary-container/20 text-tertiary-container">
        <CheckCircle2 size={18} />
      </div>
      <div>
        <h4 className="mb-1 font-semibold text-on-surface">
          {module.order}. {module.title}
        </h4>
        <p className="text-sm text-on-surface-variant">{module.description}</p>
      </div>
    </div>
  );
}
