interface ProgressRingProps {
  percent: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
  colorClassName?: string;
}

export default function ProgressRing({
  percent,
  size = 176,
  strokeWidth = 8,
  label = 'Completed',
  colorClassName = 'text-tertiary-container',
}: ProgressRingProps) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.min(100, Math.max(0, percent));
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
        <circle
          className="text-surface-variant"
          cx="50"
          cy="50"
          fill="none"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
        />
        <circle
          className={`${colorClassName} drop-shadow-md transition-all duration-700 ease-out`}
          cx="50"
          cy="50"
          fill="none"
          r={radius}
          stroke="currentColor"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-4xl font-extrabold text-tertiary-container">
          {clamped}%
        </span>
        <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
          {label}
        </span>
      </div>
    </div>
  );
}
