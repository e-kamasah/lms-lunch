import type { QAMessage } from '../types';

// Seed Q&A threads keyed by course id. Every course gets a short, generic
// starter thread; feel free to add course-specific ones as needed.
export const seedQnaByCourse: Record<string, QAMessage[]> = {
  'core-mathematics': [
    {
      id: 'qna-1',
      authorName: 'Efua O.',
      authorInitials: 'E',
      role: 'student',
      timestamp: '2 min ago',
      text: 'Can you explain the sine rule again? I missed that part.',
    },
    {
      id: 'qna-2',
      authorName: 'Teaching Asst.',
      authorInitials: 'TA',
      role: 'assistant',
      timestamp: 'Just now',
      text: 'The sine rule relates each side of a triangle to the sine of its opposite angle — useful whenever you know two angles and a side.',
    },
  ],
  'university-physics': [
    {
      id: 'qna-1',
      authorName: 'Kojo B.',
      authorInitials: 'K',
      role: 'student',
      timestamp: '5 min ago',
      text: 'Is kinetic energy always positive, even for negative velocity?',
    },
    {
      id: 'qna-2',
      authorName: 'Teaching Asst.',
      authorInitials: 'TA',
      role: 'assistant',
      timestamp: 'Just now',
      text: 'Yes — kinetic energy depends on velocity squared, so direction never makes it negative.',
    },
  ],
};

export const defaultQna: QAMessage[] = [
  {
    id: 'qna-default-1',
    authorName: 'Teaching Asst.',
    authorInitials: 'TA',
    role: 'assistant',
    timestamp: 'Just now',
    text: 'Ask a question about this lesson and a teaching assistant will get back to you shortly.',
  },
];
