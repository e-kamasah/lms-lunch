import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background p-8 text-center">
      <Compass size={40} className="text-primary" />
      <h1 className="font-display text-3xl font-extrabold text-on-surface">Page not found</h1>
      <p className="max-w-sm text-on-surface-variant">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-on-primary hover:opacity-90">
        Back to Dashboard
      </Link>
    </div>
  );
}
