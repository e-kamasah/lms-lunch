import type { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'core-mathematics',
    slug: 'core-mathematics',
    title: 'Core Mathematics',
    tagline: 'Algebra & Geometry Focus',
    description:
      'Master fundamental algebraic principles, geometry, and basic calculus designed for the modern Ghanaian high school curriculum. Build a strong foundation for advanced studies.',
    level: 'SHS',
    tag: 'WASSCE Prep',
    duration: '12 Weeks',
    moduleCount: 8,
    progressPercent: 65,
    coverImageUrl:
      'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
    instructor: {
      name: 'Mr. Kwame Mensah',
      role: 'Lead Instructor',
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    enrolled: true,
    accentColor: 'primary',
    syllabus: [
      {
        id: 'mod-1',
        order: 1,
        title: 'Algebraic Expressions',
        description: 'Polynomials, factorisation, and basic equations.',
        status: 'completed',
        durationLabel: '18:40',
      },
      {
        id: 'mod-2',
        order: 2,
        title: 'Sets and Operations',
        description: 'Venn diagrams, union, intersection, and subsets.',
        status: 'completed',
        durationLabel: '14:10',
      },
      {
        id: 'mod-3',
        order: 3,
        title: 'Plane Geometry',
        description: 'Angles, triangles, circles, and theorems.',
        status: 'completed',
        durationLabel: '22:05',
      },
      {
        id: 'mod-4',
        order: 4,
        title: 'Trigonometry',
        description: 'Sine, cosine, tangent rules and applications.',
        status: 'current',
        progressPercent: 25,
        durationLabel: '19:30',
      },
      {
        id: 'mod-5',
        order: 5,
        title: 'Statistics & Probability',
        description: 'Data presentation, central tendency, simple probability.',
        status: 'locked',
        durationLabel: '16:15',
      },
      {
        id: 'mod-6',
        order: 6,
        title: 'Coordinate Geometry',
        description: 'Lines, gradients, distances, and midpoints.',
        status: 'locked',
        durationLabel: '17:50',
      },
      {
        id: 'mod-7',
        order: 7,
        title: 'Calculus Foundations',
        description: 'Limits, differentiation, and simple applications.',
        status: 'locked',
        durationLabel: '24:00',
      },
      {
        id: 'mod-8',
        order: 8,
        title: 'Exam Revision',
        description: 'Past questions, timed mocks, and exam strategy.',
        status: 'locked',
        durationLabel: '30:00',
      },
    ],
  },
  {
    id: 'university-physics',
    slug: 'university-physics',
    title: 'Univ. Physics',
    tagline: 'Mechanics & Thermodynamics',
    description:
      'A rigorous introduction to classical mechanics and thermodynamics, preparing tertiary students for advanced engineering and science coursework.',
    level: 'Tertiary',
    tag: 'Term 2',
    duration: '14 Weeks',
    moduleCount: 10,
    progressPercent: 42,
    coverImageUrl:
      'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=1200&q=80',
    instructor: {
      name: 'Dr. Nana Adjei',
      role: 'Lead Instructor',
      avatarUrl:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    enrolled: true,
    accentColor: 'primary',
    syllabus: [
      {
        id: 'phy-1',
        order: 1,
        title: 'Kinematics',
        description: 'Motion in one and two dimensions.',
        status: 'completed',
      },
      {
        id: 'phy-2',
        order: 2,
        title: "Newton's Laws",
        description: 'Force, mass, and the laws of motion.',
        status: 'completed',
      },
      {
        id: 'phy-3',
        order: 3,
        title: 'Work & Energy',
        description: 'Conservation of energy and power.',
        status: 'current',
        progressPercent: 42,
      },
      {
        id: 'phy-4',
        order: 4,
        title: 'Thermodynamics I',
        description: 'Heat, temperature, and the laws of thermodynamics.',
        status: 'locked',
      },
    ],
  },
  {
    id: 'elective-ict',
    slug: 'elective-ict',
    title: 'Elective ICT',
    tagline: 'Programming, Networking & Systems',
    description:
      'Master programming fundamentals, networking, and system administration to prepare for the digital future.',
    level: 'Tertiary',
    tag: 'Tertiary Prep',
    featured: true,
    tags: ['Python', 'Web Dev', 'Data Structures'],
    duration: '16 Weeks',
    moduleCount: 12,
    progressPercent: 0,
    enrolledPercent: 58,
    coverImageUrl:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    instructor: {
      name: 'Ms. Ama Osei',
      role: 'Lead Instructor',
      avatarUrl:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
    },
    enrolled: false,
    accentColor: 'secondary',
    syllabus: [
      {
        id: 'ict-1',
        order: 1,
        title: 'Programming Fundamentals',
        description: 'Variables, control flow, and functions in Python.',
        status: 'locked',
      },
      {
        id: 'ict-2',
        order: 2,
        title: 'Data Structures',
        description: 'Lists, stacks, queues, and trees.',
        status: 'locked',
      },
      {
        id: 'ict-3',
        order: 3,
        title: 'Networking Basics',
        description: 'Protocols, topologies, and the OSI model.',
        status: 'locked',
      },
    ],
  },
  {
    id: 'french-for-beginners',
    slug: 'french-for-beginners',
    title: 'French for Beginners',
    tagline: 'Conversational French',
    description:
      'Start your journey to bilingualism with interactive conversational lessons designed for absolute beginners.',
    level: 'SHS',
    duration: '8 Weeks',
    moduleCount: 6,
    progressPercent: 35,
    enrolledPercent: 35,
    coverImageUrl:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    instructor: {
      name: 'Mme. Adjoa Boateng',
      role: 'Lead Instructor',
      avatarUrl:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    enrolled: true,
    accentColor: 'tertiary',
    syllabus: [
      {
        id: 'fr-1',
        order: 1,
        title: 'Greetings & Introductions',
        description: 'Basic conversational openers and pronouns.',
        status: 'completed',
      },
      {
        id: 'fr-2',
        order: 2,
        title: 'Everyday Vocabulary',
        description: 'Numbers, colours, and common nouns.',
        status: 'current',
        progressPercent: 35,
      },
    ],
  },
  {
    id: 'history-of-ghana',
    slug: 'history-of-ghana',
    title: 'History of Ghana',
    tagline: 'Pre-colonial to Modern Day',
    description:
      'Explore the rich pre-colonial and modern history of the nation, its empires, and its independence journey. Essential cultural context.',
    level: 'SHS',
    duration: '10 Modules',
    moduleCount: 10,
    progressPercent: 0,
    enrolledPercent: 45,
    coverImageUrl:
      'https://images.unsplash.com/photo-1580128637661-5787a4025b60?auto=format&fit=crop&w=1200&q=80',
    instructor: {
      name: 'Dr. K. Ansah',
      role: 'Lead Instructor',
      avatarUrl:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    },
    enrolled: false,
    accentColor: 'secondary',
    syllabus: [
      {
        id: 'hist-1',
        order: 1,
        title: 'Pre-Colonial Kingdoms',
        description: 'The Ashanti, Ga, and other early states.',
        status: 'locked',
      },
      {
        id: 'hist-2',
        order: 2,
        title: 'Colonial Era',
        description: 'The Gold Coast under colonial rule.',
        status: 'locked',
      },
      {
        id: 'hist-3',
        order: 3,
        title: 'The Road to Independence',
        description: "Nkrumah and Ghana's path to 1957.",
        status: 'locked',
      },
    ],
  },
];

export const getCourseBySlug = (slug: string) =>
  courses.find((course) => course.slug === slug);
