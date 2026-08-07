import { Link } from 'react-router-dom';
import { ArrowLeft, type LucideIcon } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';

interface ComingSoonProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ComingSoon({ icon, title, description }: ComingSoonProps) {
  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader icon={icon} title={title} description={description} />
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-outline-variant bg-surface-container-lowest px-6 py-20 text-center">
        <p className="font-display text-xl font-bold text-on-surface">Coming Soon</p>
        <p className="mt-2 max-w-sm text-on-surface-variant">
          We're building this out. Check back soon, or head back to your dashboard.
        </p>
        <Link
          to="/"
          className="mt-6 flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-on-primary transition hover:opacity-90"
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
