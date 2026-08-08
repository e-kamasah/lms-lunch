import { useState } from 'react';
import { MessagesSquare, Send } from 'lucide-react';
import { useLessonStore, getQnaForCourse } from '../../store/useLessonStore';
import clsx from '../../lib/clsx';

interface QnaPanelProps {
  courseId: string;
}

export default function QnaPanel({ courseId }: QnaPanelProps) {
  const messages = useLessonStore((state) => getQnaForCourse(state, courseId));
  const addQuestion = useLessonStore((state) => state.addQuestion);
  const [draft, setDraft] = useState('');

  const handleSend = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    addQuestion(courseId, trimmed);
    setDraft('');
  };

  const newCount = messages.filter((message) => message.role === 'student').length > 0 ? 3 : 0;

  return (
    <div className="flex h-full flex-col rounded-xl border border-surface-variant bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_30px_rgba(46,91,255,0.06)]">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-display text-lg font-bold text-on-surface">
          <MessagesSquare size={20} className="text-secondary" />
          Q&amp;A
        </h2>
        {newCount > 0 && (
          <span className="rounded-full bg-secondary-container px-2 py-1 text-xs font-bold text-on-secondary-container">
            {newCount} New
          </span>
        )}
      </div>

      <div className="mb-4 flex-1 space-y-4 overflow-y-auto pr-1 scrollbar-thin">
        {messages.map((message) => {
          const isAssistant = message.role === 'assistant';
          return (
            <div key={message.id} className={clsx('flex gap-3', isAssistant && 'ml-8')}>
              <div
                className={clsx(
                  'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                  isAssistant
                    ? 'bg-primary-container text-on-primary-container'
                    : 'bg-surface-container-high text-on-surface'
                )}
              >
                {message.authorInitials}
              </div>
              <div
                className={clsx(
                  'w-full rounded-lg rounded-tl-none p-3 text-sm text-on-surface',
                  isAssistant
                    ? 'border border-primary-container/20 bg-primary-container/10'
                    : 'bg-surface-container-low'
                )}
              >
                <p
                  className={clsx(
                    'mb-1 text-xs font-semibold',
                    isAssistant ? 'text-primary' : 'text-on-surface-variant'
                  )}
                >
                  {message.authorName}{' '}
                  <span className="ml-2 font-normal text-on-surface-variant">{message.timestamp}</span>
                </p>
                <p>{message.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative mt-auto">
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => event.key === 'Enter' && handleSend()}
          type="text"
          placeholder="Ask a question..."
          className="w-full rounded-full border border-outline-variant bg-surface-container-low py-2 pl-4 pr-12 text-sm text-on-surface outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
        />
        <button
          onClick={handleSend}
          aria-label="Send question"
          className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-on-primary transition-colors hover:bg-primary-container"
        >
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}
