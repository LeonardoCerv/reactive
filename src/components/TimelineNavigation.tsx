import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';

type TimelineNavigationProps = {
  previousHref?: string;
  previousText?: string;
  nextHref?: string;
  nextText?: string;
};

export default function TimelineNavigation({ previousHref, previousText = 'Previous', nextHref, nextText = 'Next' }: TimelineNavigationProps) {
  const getNextIcon = () => {
    switch (nextText) {
      case 'Start Over':
        return <RefreshCw className="ml-2 h-4 w-4" />;
      default:
        return <ArrowRight className="ml-2 h-4 w-4" />;
    }
  };

  return (
    <div className="w-full flex justify-between items-center mt-auto pt-8 border-t">
      <div>
        {previousHref && (
          <Button asChild variant="outline">
            <Link href={previousHref}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {previousText}
            </Link>
          </Button>
        )}
      </div>
      <div>
        {nextHref && (
          <Button asChild>
            <Link href={nextHref}>
              {nextText}
              {getNextIcon()}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
