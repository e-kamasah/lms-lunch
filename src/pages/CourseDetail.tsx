import { useParams, Link, Navigate } from 'react-router-dom';
import { useCourseStore } from '../store/useCourseStore';
import CourseInfoCard from '../components/course-detail/CourseInfoCard';
import ProgressPanel from '../components/course-detail/ProgressPanel';
import SyllabusModuleItem from '../components/course-detail/SyllabusModuleItem';
import CourseCard from '../components/courses/CourseCard';

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = useCourseStore((state) => state.courses.find((c) => c.slug === slug));
  const allCourses = useCourseStore((state) => state.courses);
  const enrollInCourse = useCourseStore((state) => state.enrollInCourse);

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const recommended = allCourses.filter((c) => c.id !== course.id).slice(0, 3);

  return (
    <div className="animate-fade-in space-y-8">
      <nav className="text-sm text-on-surface-variant">
        <Link to="/courses" className="hover:text-primary">
          Courses
        </Link>
        <span className="mx-2">/</span>
        <span className="font-semibold text-on-surface">{course.title}</span>
      </nav>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <CourseInfoCard course={course} />
        <ProgressPanel course={course} onEnroll={() => enrollInCourse(course.id)} />
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-on-surface">Course Syllabus</h2>
          <span className="text-sm font-semibold text-primary">
            {course.moduleCount ?? course.syllabus.length} Modules total
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {course.syllabus.map((module) => (
            <SyllabusModuleItem key={module.id} module={module} />
          ))}
        </div>
      </section>

      {recommended.length > 0 && (
        <section className="pb-8">
          <h2 className="mb-6 font-display text-2xl font-bold text-on-surface">Recommended for You</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recommended.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
