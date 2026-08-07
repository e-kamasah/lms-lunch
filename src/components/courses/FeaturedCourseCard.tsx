import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import type { Course } from '../../types';
import Badge from '../ui/Badge';

interface FeaturedCourseCardProps {
  course: Course;
}

export default function FeaturedCourseCard({ course }: FeaturedCourseCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(46,91,255,0.1)] sm:flex-row">
      <div className="relative h-40 shrink-0 overflow-hidden sm:h-auto sm:w-2/5">
        <img
          src={course.coverImageUrl}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <Badge tone="tertiary" icon={<Sparkles size={12} />}>
            Featured
          </Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl font-bold text-on-surface">{course.title}</h3>
          {course.tag && <Badge tone="neutral">{course.tag}</Badge>}
        </div>
        <p className="text-sm text-on-surface-variant">{course.description}</p>

        {course.tags && (
          <div className="flex flex-wrap gap-2">
            {course.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-surface-container-low px-3 py-1 text-xs font-semibold text-on-surface-variant"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 border-t border-surface-variant pt-4">
          <div className="flex items-center gap-2 text-sm text-on-surface-variant">
            <img
              src={course.instructor.avatarUrl}
              alt={course.instructor.name}
              className="h-6 w-6 rounded-full object-cover"
            />
            {course.instructor.name}
          </div>
          <Link
            to={`/courses/${course.slug}`}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-on-primary transition-colors hover:opacity-90"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
