import { Link } from 'react-router-dom';
import { Layers, HelpCircle, Users2, BookOpenText, ArrowRight } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';

const tools = [
  {
    id: 'flashcards',
    title: 'Flashcards',
    description: 'Quiz yourself with spaced-repetition flashcards for every subject.',
    icon: Layers,
    path: '/study-tools/flashcards',
    tone: 'bg-primary-fixed text-primary',
  },
  {
    id: 'past-questions',
    title: 'Past Questions',
    description: 'Practice with WASSCE past questions, timed and marked instantly.',
    icon: HelpCircle,
    path: '/study-tools/past-questions',
    tone: 'bg-tertiary-container/15 text-tertiary-container',
  },
  {
    id: 'study-groups',
    title: 'Study Groups',
    description: 'Join a group and tackle tough topics together with peers.',
    icon: Users2,
    path: '/community',
    tone: 'bg-secondary-fixed text-secondary',
  },
];

export default function StudyTools() {
  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader
        icon={BookOpenText}
        title="Study Tools"
        description="Everything you need to reinforce what you're learning."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map(({ id, title, description, icon: Icon, path, tone }) => (
          <Link
            key={id}
            to={path}
            className="group flex flex-col gap-4 rounded-xl border border-surface-variant bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(46,91,255,0.1)]"
          >
            <span className={`flex h-12 w-12 items-center justify-center rounded-full ${tone}`}>
              <Icon size={22} />
            </span>
            <div>
              <h3 className="font-display font-bold text-on-surface">{title}</h3>
              <p className="mt-1 text-sm text-on-surface-variant">{description}</p>
            </div>
            <span className="mt-auto flex items-center gap-1 text-sm font-bold text-primary">
              Open <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
