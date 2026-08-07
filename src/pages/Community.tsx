import { Users, MessageCircle, Plus } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';

const studyGroups = [
  {
    id: 'g1',
    name: 'WASSCE Mathematics Warriors',
    members: 128,
    topic: 'Core Mathematics',
    lastActive: 'Active now',
  },
  {
    id: 'g2',
    name: 'Physics Problem Solvers',
    members: 64,
    topic: 'Univ. Physics',
    lastActive: '10 min ago',
  },
  {
    id: 'g3',
    name: 'French Conversation Circle',
    members: 41,
    topic: 'French for Beginners',
    lastActive: '1 hour ago',
  },
  {
    id: 'g4',
    name: 'History Buffs Ghana',
    members: 57,
    topic: 'History of Ghana',
    lastActive: 'Yesterday',
  },
];

export default function Community() {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <PageHeader
          icon={Users}
          title="Community"
          description="Connect with peers, join study groups, and learn together."
        />
        <button className="flex items-center justify-center gap-2 self-start rounded-lg bg-primary px-4 py-2 text-sm font-bold text-on-primary transition hover:opacity-90">
          <Plus size={16} /> New Group
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {studyGroups.map((group) => (
          <div
            key={group.id}
            className="flex items-start gap-4 rounded-xl border border-surface-variant bg-surface-container-lowest p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(46,91,255,0.1)]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-fixed text-primary">
              <MessageCircle size={22} />
            </span>
            <div className="flex-1">
              <h3 className="font-display font-bold text-on-surface">{group.name}</h3>
              <p className="text-sm text-on-surface-variant">{group.topic}</p>
              <div className="mt-3 flex items-center justify-between text-xs text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <Users size={14} /> {group.members} members
                </span>
                <span className="font-semibold text-tertiary-container">{group.lastActive}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
