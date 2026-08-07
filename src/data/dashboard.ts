import type { AppUser, StudyArsenalItem, UpcomingTask } from '../types';

export const currentUser: AppUser = {
  name: 'Kwame Anane',
  greetingName: 'Kwame',
  avatarUrl:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  weeklyGoalPercent: 85,
  studyStreakDays: 12,
};

export const upcomingTasks: UpcomingTask[] = [
  {
    id: 'task-1',
    title: 'Mock Exam: English',
    meta: 'Due Tomorrow, 9:00 AM',
    status: 'upcoming',
    icon: 'exam',
  },
  {
    id: 'task-2',
    title: 'Lab Report Draft',
    meta: 'Due Friday, 11:59 PM',
    status: 'upcoming',
    icon: 'report',
  },
  {
    id: 'task-3',
    title: 'Read Ch 4: History',
    meta: 'Completed',
    status: 'completed',
    icon: 'reading',
  },
];

export const studyArsenal: StudyArsenalItem[] = [
  { id: 'flashcards', label: 'Flashcards', icon: 'flashcards', path: '/study-tools/flashcards' },
  {
    id: 'past-questions',
    label: 'Past Questions',
    icon: 'past-questions',
    path: '/study-tools/past-questions',
  },
  {
    id: 'study-groups',
    label: 'Study Groups',
    icon: 'study-groups',
    path: '/community',
  },
];
