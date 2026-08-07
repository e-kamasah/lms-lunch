import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCourseStore } from '../store/useCourseStore';
import { currentUser, upcomingTasks, studyArsenal } from '../data/dashboard';
import WelcomeHero from '../components/dashboard/WelcomeHero';
import CurrentCourseCard from '../components/dashboard/CurrentCourseCard';
import UpcomingPanel from '../components/dashboard/UpcomingPanel';
import StudyArsenal from '../components/dashboard/StudyArsenal';

export default function Dashboard() {
  const courses = useCourseStore((state) => state.courses);
  const currentCourses = useMemo(
    () => courses.filter((course) => course.enrolled).slice(0, 2),
    [courses]
  );

  return (
    <div className="animate-fade-in space-y-8">
      <WelcomeHero user={currentUser} />

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-xl font-bold text-on-surface md:text-2xl">
              Current Courses
            </h2>
            <Link to="/courses" className="text-sm font-semibold text-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {currentCourses.map((course) => (
              <CurrentCourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <UpcomingPanel tasks={upcomingTasks} />
        </div>
      </section>

      <StudyArsenal items={studyArsenal} />
    </div>
  );
}
