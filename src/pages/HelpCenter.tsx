import { HelpCircle, Mail, MessageSquare, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '../components/ui/PageHeader';
import clsx from '../lib/clsx';

const faqs = [
  {
    q: 'How do I enroll in a course?',
    a: 'Open the course from the Course Catalog and tap "Enroll Now" or "View Details" to get started.',
  },
  {
    q: 'How is my weekly goal calculated?',
    a: 'Your weekly goal tracks completed lessons and study sessions against the target you set in Settings.',
  },
  {
    q: 'Can I use LearnMate offline?',
    a: 'Downloaded flashcards and past questions are available offline. Course videos require a connection.',
  },
];

export default function HelpCenter() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader icon={HelpCircle} title="Help Center" description="Find answers or get in touch with us." />

      <section className="rounded-xl border border-surface-variant bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.q} className="border-b border-surface-variant last:border-b-0">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-semibold text-on-surface">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={clsx('shrink-0 text-on-surface-variant transition-transform', isOpen && 'rotate-180')}
                />
              </button>
              {isOpen && <p className="px-5 pb-5 text-sm text-on-surface-variant">{faq.a}</p>}
            </div>
          );
        })}
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-4 rounded-xl border border-surface-variant bg-surface-container-lowest p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed text-primary">
            <Mail size={20} />
          </span>
          <div>
            <p className="font-semibold text-on-surface">Email Support</p>
            <p className="text-sm text-on-surface-variant">support@learnmate.edu.gh</p>
          </div>
        </div>
        <div className="flex items-center gap-4 rounded-xl border border-surface-variant bg-surface-container-lowest p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-container/15 text-tertiary-container">
            <MessageSquare size={20} />
          </span>
          <div>
            <p className="font-semibold text-on-surface">Live Chat</p>
            <p className="text-sm text-on-surface-variant">Mon-Fri, 8am - 6pm GMT</p>
          </div>
        </div>
      </section>
    </div>
  );
}
