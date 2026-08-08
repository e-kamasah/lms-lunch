import { useParams, Link, Navigate } from 'react-router-dom';
import { useCourseStore } from '../store/useCourseStore';
import LessonVideoCard from '../components/lesson/LessonVideoCard';
import NotesPanel from '../components/lesson/NotesPanel';
import QnaPanel from '../components/lesson/QnaPanel';
import LessonOutlineSidebar from '../components/lesson/LessonOutlineSidebar';

export default function Lesson() {
  const { slug, moduleId } = useParams<{ slug: string; moduleId?: string }>();
  const course = useCourseStore((state) => state.courses.find((c) => c.slug === slug));

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const activeModule =
    (moduleId && course.syllabus.find((m) => m.id === moduleId)) ??
    course.syllabus.find((m) => m.status === 'current') ??
    course.syllabus[0];

  if (!activeModule) {
    return <Navigate to={`/courses/${course.slug}`} replace />;
  }

  const lessonKey = `${course.slug}:${activeModule.id}`;

  return (
    <div className="animate-fade-in flex flex-col gap-6 lg:flex-row">
      <div className="flex flex-1 flex-col gap-6">
        <nav className="text-sm text-on-surface-variant">
          <Link to="/courses" className="hover:text-primary">
            Courses
          </Link>
          <span className="mx-2">/</span>
          <Link to={`/courses/${course.slug}`} className="hover:text-primary">
            {course.title}
          </Link>
          <span className="mx-2">/</span>
          <span className="font-semibold text-on-surface">{activeModule.title}</span>
        </nav>

        <LessonVideoCard course={course} module={activeModule} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <NotesPanel lessonKey={lessonKey} fileName={`${course.slug}-${activeModule.id}-notes`} />
          <QnaPanel courseId={course.id} />
        </div>
      </div>

      <LessonOutlineSidebar course={course} activeModuleId={activeModule.id} />
    </div>
  );
}
