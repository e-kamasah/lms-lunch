export type CourseLevel = 'SHS' | 'Tertiary';

export interface Instructor {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface SyllabusModule {
  id: string;
  order: number;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'locked';
  progressPercent?: number;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  level: CourseLevel;
  tag?: string; // e.g. "WASSCE Prep", "Term 2", "Tertiary Prep"
  featured?: boolean;
  tags?: string[]; // e.g. Python, Web Dev
  duration: string; // e.g. "12 Weeks"
  moduleCount?: number;
  progressPercent: number; // 0 - not enrolled, else % complete
  enrolledPercent?: number; // for "class filling fast" style courses
  coverImageUrl: string;
  instructor: Instructor;
  syllabus: SyllabusModule[];
  enrolled: boolean;
  accentColor: 'primary' | 'secondary' | 'tertiary';
}

export type TaskStatus = 'upcoming' | 'completed';

export interface UpcomingTask {
  id: string;
  title: string;
  meta: string; // e.g. "Due Tomorrow, 9:00 AM"
  status: TaskStatus;
  icon: 'exam' | 'report' | 'reading';
}

export interface StudyArsenalItem {
  id: string;
  label: string;
  icon: 'flashcards' | 'past-questions' | 'study-groups';
  path: string;
}

export interface AppUser {
  name: string;
  greetingName: string;
  avatarUrl: string;
  weeklyGoalPercent: number;
  studyStreakDays: number;
}
