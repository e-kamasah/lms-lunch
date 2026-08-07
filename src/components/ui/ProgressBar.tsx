interface ProgressBarProps {
  percent: number;
  colorClassName?: string;
  trackClassName?: string;
  heightClassName?: string;
}

export default function ProgressBar({
  percent,
  colorClassName = 'bg-primary',
  trackClassName = 'bg-surface-variant',
  heightClassName = 'h-2',
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, percent));
  return (
    <div className={`w-full overflow-hidden rounded-full ${heightClassName} ${trackClassName}`}>
      <div
        className={`${heightClassName} rounded-full ${colorClassName} transition-all duration-500`}
        style={{ width: `${clamped}%` }}
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}
