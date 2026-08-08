import { NotebookPen } from 'lucide-react';
import { useLessonStore } from '../../store/useLessonStore';

interface NotesPanelProps {
  lessonKey: string;
  fileName: string;
}

export default function NotesPanel({ lessonKey, fileName }: NotesPanelProps) {
  const note = useLessonStore((state) => state.notesByLesson[lessonKey] ?? '');
  const setNote = useLessonStore((state) => state.setNote);

  const handleExport = () => {
    const blob = new Blob([note], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex h-full flex-col rounded-xl border border-surface-variant bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_30px_rgba(46,91,255,0.06)]">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-display text-lg font-bold text-on-surface">
          <NotebookPen size={20} className="text-primary" />
          My Notes
        </h2>
        <button
          onClick={handleExport}
          disabled={!note}
          className="text-sm font-semibold text-primary hover:underline disabled:cursor-not-allowed disabled:text-outline disabled:no-underline"
        >
          Export
        </button>
      </div>
      <textarea
        value={note}
        onChange={(event) => setNote(lessonKey, event.target.value)}
        placeholder="Type your notes here... They auto-save as you type."
        className="min-h-[200px] flex-1 resize-none rounded-lg border border-outline-variant bg-surface-container-low p-4 text-sm text-on-surface outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
      />
    </div>
  );
}
