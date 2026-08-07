import { Link } from 'react-router-dom';
import { Sigma, Atom } from 'lucide-react';
import type { Course } from '../../types';
import Badge from '../ui/Badge';
import ProgressBar from '../ui/ProgressBar';

const iconForCourse = (title: string) => {
  if (/math/i.test(title)) return Sigma;
  if (/phys/i.test(title)) return Atom;
  return Sigma;
};

interface CurrentCourseCardProps {
  course: Course;
}

export default function CurrentCourseCard({ course }: CurrentCourseCardProps) {
  const Icon = iconForCourse(course.title);

  return (
    <Link
      to={`/courses/${course.slug}`}
      className="group flex flex-col gap-4 rounded-xl border border-surface-variant bg-surface-container-lowest p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(46,91,255,0.1)]"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-tertiary-container/15 text-tertiary-container">
          <Icon size={22} />
        </div>
        {course.tag && (
          <Badge tone={course.accentColor === 'primary' ? 'secondary' : 'neutral'}>
            {course.tag}
          </Badge>
        )}
      </div>
      <div>
        <h3 className="font-display text-lg font-bold text-on-surface group-hover:text-primary">
          {course.title}
        </h3>
        <p className="text-sm text-on-surface-variant">{course.tagline}</p>
      </div>
      <div>
        <div className="mb-1 flex items-center justify-between text-sm">
          <span className="font-medium text-on-surface-variant">Progress</span>
          <span className="font-bold text-on-surface">{course.progressPercent}%</span>
        </div>
        <ProgressBar
          percent={course.progressPercent}
          colorClassName={course.accentColor === 'primary' ? 'bg-primary' : 'bg-tertiary-container'}
        />
      </div>
    </Link>
  );
}
