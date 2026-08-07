import { Link } from 'react-router-dom';
import { Layers, HelpCircle, Users2 } from 'lucide-react';
import type { StudyArsenalItem } from '../../types';

const iconMap = {
  flashcards: { Icon: Layers, tone: 'bg-primary-fixed text-primary' },
  'past-questions': { Icon: HelpCircle, tone: 'bg-tertiary-container/15 text-tertiary-container' },
  'study-groups': { Icon: Users2, tone: 'bg-secondary-fixed text-secondary' },
} as const;

interface StudyArsenalProps {
  items: StudyArsenalItem[];
}

export default function StudyArsenal({ items }: StudyArsenalProps) {
  return (
    <section>
      <h2 className="mb-4 font-display text-xl font-bold text-on-surface md:text-2xl">Study Arsenal</h2>
      <div className="grid grid-cols-3 gap-3 md:max-w-2xl md:gap-4">
        {items.map((item) => {
          const { Icon, tone } = iconMap[item.icon];
          return (
            <Link
              key={item.id}
              to={item.path}
              className="flex flex-col items-center justify-center gap-3 rounded-xl border border-surface-variant bg-surface-container-lowest p-5 text-center shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(46,91,255,0.1)]"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-full ${tone}`}>
                <Icon size={22} />
              </span>
              <span className="text-sm font-semibold text-on-surface">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
