import { HelpCircle } from 'lucide-react';
import ComingSoon from './ComingSoon';

export default function PastQuestions() {
  return (
    <ComingSoon
      icon={HelpCircle}
      title="Past Questions"
      description="Timed WASSCE past questions, marked instantly."
    />
  );
}
