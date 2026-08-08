import { useState } from 'react';
import {
  Bookmark,
  BookmarkCheck,
  Play,
  Pause,
  Volume2,
  Captions,
  Settings,
  Maximize,
} from 'lucide-react';
import type { Course, SyllabusModule } from '../../types';
import Badge from '../ui/Badge';

interface LessonVideoCardProps {
  course: Course;
  module: SyllabusModule;
}

export default function LessonVideoCard({ course, module }: LessonVideoCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-surface-variant bg-surface-container-lowest shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-start justify-between gap-4 border-b border-surface-variant p-4 md:p-6">
        <div>
          <Badge tone="primary" className="mb-2">
            {course.title}
          </Badge>
          <h1 className="font-display text-xl font-bold text-on-surface md:text-2xl">
            {module.title}
          </h1>
        </div>
        <button
          onClick={() => setIsSaved((prev) => !prev)}
          className="flex shrink-0 items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-on-primary shadow-sm transition-colors hover:opacity-90"
        >
          {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
          {isSaved ? 'Saved' : 'Save'}
        </button>
      </div>

      <div
        className="group relative flex aspect-video w-full items-center justify-center overflow-hidden bg-black"
        role="group"
        aria-label="Lesson video player"
      >
        <img
          src={course.coverImageUrl}
          alt={module.title}
          className="h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100"
        />

        <button
          onClick={() => setIsPlaying((prev) => !prev)}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="absolute inset-0 flex items-center justify-center"
        >
          {!isPlaying && (
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <Play size={36} className="ml-1 fill-on-primary text-on-primary" />
            </span>
          )}
        </button>

        <div className="absolute bottom-0 left-0 flex w-full flex-col gap-2 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="h-1 w-full cursor-pointer overflow-hidden rounded-full bg-surface-variant/50">
            <div className="h-full w-1/3 bg-primary" />
          </div>
          <div className="flex items-center justify-between text-xs font-semibold text-on-primary">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsPlaying((prev) => !prev)} aria-label="Toggle play">
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </button>
              <button aria-label="Volume">
                <Volume2 size={16} />
              </button>
              <span>12:45 / {module.durationLabel ?? '45:00'}</span>
            </div>
            <div className="flex items-center gap-4">
              <button aria-label="Captions">
                <Captions size={16} />
              </button>
              <button aria-label="Settings">
                <Settings size={16} />
              </button>
              <button aria-label="Fullscreen">
                <Maximize size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
