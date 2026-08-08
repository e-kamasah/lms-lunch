import { Link } from 'react-router-dom';
import {
  ListChecks,
  CheckCircle2,
  Lock,
  FileQuestion,
  Presentation,
  FileText,
} from 'lucide-react';
import type { Course, SyllabusModule } from '../../types';
import ProgressBar from '../ui/ProgressBar';
import clsx from '../../lib/clsx';

interface LessonOutlineSidebarProps {
  course: Course;
  activeModuleId: string;
}

function OutlineRow({ course, module, isActive }: { course: Course; module: SyllabusModule; isActive: boolean }) {
  if (isActive) {
    return (
      <li>
        <Link
          to={`/courses/${course.slug}/lesson/${module.id}`}
          className="flex items-center gap-3 rounded-lg border-l-4 border-primary bg-primary-container/10 p-3 transition-colors"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/20">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          </span>
          <div className="flex-1">
            <p className="text-sm font-semibold text-primary">
              {module.order}. {module.title}
            </p>
            <p className="text-xs font-medium text-primary/80">Now Playing</p>
          </div>
        </Link>
      </li>
    );
  }

  if (module.status === 'completed') {
    return (
      <li>
        <Link
          to={`/courses/${course.slug}/lesson/${module.id}`}
          className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-surface-container-low"
        >
          <CheckCircle2 size={20} className="shrink-0 fill-tertiary-container/20 text-tertiary-container" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-on-surface-variant line-through">
              {module.order}. {module.title}
            </p>
            {module.durationLabel && (
              <p className="text-xs text-on-surface-variant">{module.durationLabel}</p>
            )}
          </div>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <div className="flex items-center gap-3 rounded-lg p-3 opacity-70">
        <Lock size={18} className="shrink-0 text-outline" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-on-surface">
            {module.order}. {module.title}
          </p>
          {module.durationLabel && (
            <p className="text-xs text-on-surface-variant">{module.durationLabel}</p>
          )}
        </div>
      </div>
    </li>
  );
}

export default function LessonOutlineSidebar({ course, activeModuleId }: LessonOutlineSidebarProps) {
  return (
    <aside className="w-full shrink-0 lg:w-[320px]">
      <div className="sticky top-[96px] rounded-xl border border-surface-variant bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
        <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-bold text-on-surface">
          <ListChecks size={20} className="text-tertiary-container" />
          Lesson Outline
        </h3>

        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-semibold text-on-surface-variant">Progress</span>
            <span className="font-bold text-tertiary-container">{course.progressPercent}%</span>
          </div>
          <ProgressBar percent={course.progressPercent} colorClassName="bg-tertiary-container" />
        </div>

        <ul className="space-y-1">
          {course.syllabus.map((module) => (
            <OutlineRow
              key={module.id}
              course={course}
              module={module}
              isActive={module.id === activeModuleId}
            />
          ))}
          <li>
            <div
              className={clsx(
                'flex items-center gap-3 rounded-lg p-3',
                course.progressPercent < 100 && 'opacity-70'
              )}
            >
              <FileQuestion size={18} className="shrink-0 text-outline" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-on-surface">Module Quiz</p>
                <p className="text-xs text-on-surface-variant">10 Questions</p>
              </div>
            </div>
          </li>
        </ul>

        <div className="mt-6 border-t border-outline-variant pt-6">
          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-on-surface-variant">
            Resources
          </h4>
          <div className="flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-1 rounded-md border border-outline-variant/50 bg-surface-container-low px-3 py-1.5 text-xs font-semibold text-on-surface-variant transition-colors hover:bg-surface-container">
              <Presentation size={14} /> Slides
            </button>
            <button className="inline-flex items-center gap-1 rounded-md border border-outline-variant/50 bg-surface-container-low px-3 py-1.5 text-xs font-semibold text-on-surface-variant transition-colors hover:bg-surface-container">
              <FileText size={14} /> Transcript
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
