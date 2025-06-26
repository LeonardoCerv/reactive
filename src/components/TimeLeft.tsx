'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { intervalToDuration, Duration } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';

const anniversaryDate = new Date('2025-05-01T14:00:00');
const metDate = new Date('2024-03-15T23:00:00');

type TimeUnitProps = {
  value?: number;
  label: string;
};


function TimeUnit({ value, label }: TimeUnitProps) {
  if (value === undefined) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Skeleton className="w-24 h-28 bg-card" />
        <Skeleton className="h-4 w-16 bg-card" />
      </div>
    );
  }

  const formattedValue = String(value).padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative bg-card-primary rounded-lg shadow-2xl w-24 h-28 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-card/40 to-card/60 rounded-lg"></div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black/20"></div>
        <span className="font-mono text-7xl font-bold text-primary-foreground drop-shadow-lg z-10">
          {formattedValue}
        </span>
      </div>
      <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export default function RelationshipCounter() {
  const [now, setNow] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    async function fetchTime() {
      try {
        const res = await fetch(
          'https://worldtimeapi.org/api/timezone/America/Mexico_City',
          { cache: 'no-store' }
        );
        if (!res.ok) {
          throw new Error('Failed to fetch time data. Using local time.');
        }
        const data = await res.json();
        const initialTime = new Date(data.datetime);
        setNow(initialTime);

        intervalId = setInterval(() => {
          setNow((prevNow) => {
            if (!prevNow) return null;
            const newNow = new Date(prevNow.getTime() + 1000);
            return newNow;
          });
        }, 1000);

      } catch (e: any) {
        setError(e.message);
      
      }
    }

    fetchTime();

    return () => clearInterval(intervalId);
  }, []);

  const datingDuration: Duration | null = now
    ? intervalToDuration({ start: anniversaryDate, end: now })
    : null;

  const metDuration: Duration | null = now
    ? intervalToDuration({ start: metDate, end: now })
    : null;

  const ColonSeparator = () => (
    <div className="h-28 flex items-center justify-center">
      <span className="font-mono text-6xl font-bold text-muted-foreground">:</span>
    </div>
  );
  
  return (
    <div className="flex flex-col items-center justify-center my-8 w-full">
      <div className="relative w-full max-w-2xl flex items-center justify-center">
        <Heart className="w-full h-auto text-primary/80 fill-current" />
        <div className="absolute -translate-y-16 flex gap-2 md:gap-4 items-center justify-center text-white">
                <TimeUnit value={datingDuration?.months} label="Months" />
                <ColonSeparator />
                <TimeUnit value={datingDuration?.days} label="Days" />
                <ColonSeparator />
                <TimeUnit value={datingDuration?.hours} label="Hours" />
        </div>
      </div>
      
      {error && <p className="text-sm text-destructive mt-4">{error}</p>}
      
      <div className="text-center mt-6 p-4 border-t border-dashed border-primary/30 w-full max-w-md">
        <h3 className="font-semibold text-muted-foreground">Since we first met...</h3>
        {metDuration ? (
             <p className="text-lg text-foreground/90 font-body">
             {metDuration.years ? `${metDuration.years} year${metDuration.years === 1 ? '' : 's'}, ` : ''}
             {metDuration.months} months, {metDuration.days} days, {metDuration.hours} hours, and {metDuration.minutes} minutes have passed.
           </p>
        ) : (
            <div className="flex justify-center mt-2">
                <Skeleton className="h-6 w-3/4" />
            </div>
        )}
      </div>
    </div>
  );
}
