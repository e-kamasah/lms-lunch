import { create } from 'zustand';
import type { QAMessage } from '../types';
import { seedQnaByCourse, defaultQna } from '../data/qna';

interface LessonState {
  // Notes are keyed by `${courseSlug}:${moduleId}` so each lesson has its own pad.
  notesByLesson: Record<string, string>;
  setNote: (key: string, text: string) => void;

  // Q&A threads are keyed by courseId (seeded once from data/qna.ts, then grows
  // as the learner posts new questions).
  qnaByCourse: Record<string, QAMessage[]>;
  addQuestion: (courseId: string, text: string) => void;
}

export const useLessonStore = create<LessonState>((set) => ({
  notesByLesson: {},
  setNote: (key, text) =>
    set((state) => ({
      notesByLesson: { ...state.notesByLesson, [key]: text },
    })),

  qnaByCourse: {},
  addQuestion: (courseId, text) =>
    set((state) => {
      const existing = state.qnaByCourse[courseId] ?? seedQnaByCourse[courseId] ?? defaultQna;
      const newMessage: QAMessage = {
        id: `qna-${Date.now()}`,
        authorName: 'You',
        authorInitials: 'Y',
        role: 'student',
        timestamp: 'Just now',
        text,
      };
      return {
        qnaByCourse: { ...state.qnaByCourse, [courseId]: [...existing, newMessage] },
      };
    }),
}));

export const getQnaForCourse = (state: LessonState, courseId: string): QAMessage[] =>
  state.qnaByCourse[courseId] ?? seedQnaByCourse[courseId] ?? defaultQna;
