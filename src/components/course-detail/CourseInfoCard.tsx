import { Clock } from 'lucide-react';
import type { Course } from '../../types';
import Badge from '../ui/Badge';

interface CourseInfoCardProps {
  course: Course;
}

export default function CourseInfoCard({ course }: CourseInfoCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(46,91,255,0.1)] lg:col-span-2">
      <div className="relative h-48 overflow-hidden bg-primary-container/20 md:h-64">
        <img
          src={course.coverImageUrl}
          alt={course.title}
          className="h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent" />
        <div className="absolute bottom-4 left-6 flex items-center gap-2">
          <Badge tone="tertiary">{course.level} Level</Badge>
          <Badge icon={<Clock size={14} />}>{course.duration}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
        <div>
          <h1 className="font-display text-2xl font-extrabold text-on-surface md:text-4xl">
            {course.title}
          </h1>
          <p className="mt-4 max-w-2xl text-on-surface-variant md:text-lg">{course.description}</p>
        </div>
        <div className="mt-6 flex items-center gap-4 border-t border-outline-variant pt-6">
          <img
            src={course.instructor.avatarUrl}
            alt={course.instructor.name}
            className="h-12 w-12 rounded-full border-2 border-primary-container object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-on-surface">{course.instructor.name}</p>
            <p className="text-xs text-on-surface-variant">{course.instructor.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
