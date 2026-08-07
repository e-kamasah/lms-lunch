import { useMemo } from 'react';
import { Search } from 'lucide-react';
import { useCourseStore } from '../store/useCourseStore';
import LevelFilterTabs from '../components/courses/LevelFilterTabs';
import CourseCard from '../components/courses/CourseCard';
import FeaturedCourseCard from '../components/courses/FeaturedCourseCard';

export default function Courses() {
  const { courses, levelFilter, setLevelFilter, searchTerm, setSearchTerm } = useCourseStore();

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesLevel = levelFilter === 'All' || course.level === levelFilter;
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesLevel && matchesSearch;
    });
  }, [courses, levelFilter, searchTerm]);

  return (
    <div className="animate-fade-in space-y-8">
      <section className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-display text-3xl font-extrabold text-primary md:text-4xl">
            Course Catalog
          </h1>
          <p className="mt-1 text-on-surface-variant">Explore subjects to enhance your academic journey.</p>
        </div>
        <LevelFilterTabs value={levelFilter} onChange={setLevelFilter} />
      </section>

      <div className="relative flex max-w-md items-center md:hidden">
        <Search className="pointer-events-none absolute left-3 text-outline" size={18} />
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          type="text"
          placeholder="Search courses..."
          className="w-full rounded-full border border-outline-variant bg-surface-container-lowest py-2 pl-10 pr-4 text-sm text-on-surface outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>

      {filteredCourses.length === 0 ? (
        <p className="rounded-xl border border-dashed border-outline-variant p-10 text-center text-on-surface-variant">
          No courses match your search. Try a different filter.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredCourses.map((course) =>
            course.featured ? (
              <FeaturedCourseCard key={course.id} course={course} />
            ) : (
              <CourseCard key={course.id} course={course} />
            )
          )}
        </div>
      )}
    </div>
  );
}
