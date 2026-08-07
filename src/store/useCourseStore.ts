import { create } from 'zustand';
import { courses as initialCourses } from '../data/courses';
import type { Course, CourseLevel } from '../types';

interface CourseState {
  courses: Course[];
  levelFilter: 'All' | CourseLevel;
  searchTerm: string;
  setLevelFilter: (level: 'All' | CourseLevel) => void;
  setSearchTerm: (term: string) => void;
  enrollInCourse: (courseId: string) => void;
}

// Note: derived data (filtering/finding courses) is intentionally NOT stored
// as selector-callable functions here. Zustand's useSyncExternalStore compares
// selector output by reference on every render — a selector that calls
// `.filter()`/`.map()` internally returns a brand-new array each time, which
// makes React think the store changed on every render and can trigger an
// infinite update loop. Instead, components select the raw `courses` array
// and derive what they need locally with `useMemo`.

export const useCourseStore = create<CourseState>((set) => ({
  courses: initialCourses,
  levelFilter: 'All',
  searchTerm: '',
  setLevelFilter: (level) => set({ levelFilter: level }),
  setSearchTerm: (term) => set({ searchTerm: term }),
  enrollInCourse: (courseId) =>
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId
          ? { ...course, enrolled: true, progressPercent: course.progressPercent || 1 }
          : course
      ),
    })),
}));

export const findCourseBySlug = (courses: Course[], slug: string) =>
  courses.find((course) => course.slug === slug);
