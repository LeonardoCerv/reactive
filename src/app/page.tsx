import { Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (

      <div className="text-center flex flex-col items-center justify-center flex-grow">
        <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary mb-4">
          Our Storybook
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8">
          To my dearest, for our 2 month anniversary.
        </p>
        <div className="flex items-center space-x-4 text-2xl font-semibold text-accent">
          <span>You</span>
          <Heart className="w-8 h-8 text-primary fill-current" />
          <span>Me</span>
        </div>
        <p className="mt-8 text-lg text-muted-foreground">Est. Two Months Ago & Forever To Go</p>
        
        <div className="mt-12">
            <Button asChild size="lg">
                <Link href="/memories">
                    Start Our Story
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>

      </div>
  );
}
