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
  durationLabel?: string; // e.g. "05:20"
  videoUrl?: string;
}

export interface QAMessage {
  id: string;
  authorName: string;
  authorInitials: string;
  role: 'student' | 'assistant';
  timestamp: string;
  text: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  level: CourseLevel;
  tag?: string;
  featured?: boolean;
  tags?: string[]; 
  duration: string;
  moduleCount?: number;
  progressPercent: number; 
  enrolledPercent?: number; 
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
