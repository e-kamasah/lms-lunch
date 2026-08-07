import { Link } from 'react-router-dom';
import { Star, Clock, Users, BookMarked } from 'lucide-react';
import type { Course } from '../../types';
import Badge from '../ui/Badge';
import ProgressBar from '../ui/ProgressBar';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const isInProgress = course.enrolled && course.progressPercent > 0;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(46,91,255,0.1)]">
      <div className="relative h-40 overflow-hidden bg-primary-container/20">
        <img
          src={course.coverImageUrl}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3">
          <Badge>{course.level} Level</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="flex items-center gap-2 font-display text-lg font-bold text-on-surface">
            {course.title}
            {course.enrolled && course.progressPercent > 40 && (
              <Star size={16} className="fill-secondary-fixed-dim text-secondary-fixed-dim" />
            )}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-on-surface-variant">{course.description}</p>
        </div>

        <div className="flex items-center gap-2 text-sm text-on-surface-variant">
          <img
            src={course.instructor.avatarUrl}
            alt={course.instructor.name}
            className="h-6 w-6 rounded-full object-cover"
          />
          {course.instructor.name}
        </div>

        {isInProgress ? (
          <div className="text-xs font-semibold text-secondary">
            <span className="mb-1 flex items-center gap-1">
              <BookMarked size={14} /> Class filling fast
            </span>
            <ProgressBar percent={course.progressPercent} colorClassName="bg-tertiary-container" />
            <span className="mt-1 block text-tertiary-container">{course.progressPercent}% Enrolled</span>
          </div>
        ) : course.enrolledPercent !== undefined ? (
          <div className="flex items-center gap-1 text-xs font-semibold text-on-surface-variant">
            <Users size={14} /> {course.enrolledPercent}% Enrolled
          </div>
        ) : null}

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-surface-variant pt-4">
          <span className="flex items-center gap-1 text-xs font-medium text-on-surface-variant">
            <Clock size={14} /> {course.duration}
          </span>
          <Link
            to={`/courses/${course.slug}`}
            className={
              course.enrolled
                ? 'rounded-lg border border-primary bg-surface px-4 py-2 text-sm font-bold text-primary transition-colors hover:bg-primary-container hover:text-on-primary-container'
                : 'rounded-lg bg-primary px-4 py-2 text-sm font-bold text-on-primary transition-colors hover:bg-on-primary-fixed'
            }
          >
            {course.enrolled ? 'Continue' : 'View Details'}
          </Link>
        </div>
      </div>
    </div>
  );
}
