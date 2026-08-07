import { ArrowRight, PartyPopper } from 'lucide-react';
import ProgressRing from '../ui/ProgressRing';
import type { Course } from '../../types';

interface ProgressPanelProps {
  course: Course;
  onEnroll: () => void;
}

export default function ProgressPanel({ course, onEnroll }: ProgressPanelProps) {
  const nextModule = course.syllabus.find((module) => module.status === 'current');

  return (
    <div className="relative flex flex-col justify-center overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] md:p-8 lg:col-span-1">
      <div className="absolute right-0 top-0 -z-0 h-32 w-32 rounded-bl-full bg-primary-container/10" />

      {course.enrolled ? (
        <>
          <h3 className="font-display text-xl font-bold text-on-surface">Your Progress</h3>
          <p className="mb-8 text-on-surface-variant">You're doing great! Keep it up.</p>
          <ProgressRing percent={course.progressPercent} />
          <button
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-lg font-bold text-on-primary shadow-[0_8px_20px_rgba(46,91,255,0.2)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_12px_25px_rgba(46,91,255,0.3)]"
          >
            Continue Learning
            <ArrowRight size={20} />
          </button>
          {nextModule && (
            <p className="mt-4 text-xs font-semibold text-on-surface-variant">
              Next: Module {nextModule.order} - {nextModule.title}
            </p>
          )}
        </>
      ) : (
        <>
          <PartyPopper className="mx-auto mb-4 text-secondary-fixed-dim" size={40} />
          <h3 className="font-display text-xl font-bold text-on-surface">Ready to start?</h3>
          <p className="mb-8 text-on-surface-variant">
            Enroll now to unlock all {course.moduleCount ?? course.syllabus.length} modules.
          </p>
          <button
            onClick={onEnroll}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-lg font-bold text-on-primary shadow-[0_8px_20px_rgba(46,91,255,0.2)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_12px_25px_rgba(46,91,255,0.3)]"
          >
            Enroll Now
          </button>
        </>
      )}
    </div>
  );
}
