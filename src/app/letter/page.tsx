
import AnimatedLetter from "@/components/AnimatedLetter";
import TimelineNavigation from "@/components/TimelineNavigation";

export default function LetterPage() {
  return (
    <>
      <div className="flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">A Special Note</h1>
          <p className="text-lg text-muted-foreground mt-2">Just for you.</p>
        </div>
        <AnimatedLetter />
      </div>
      <TimelineNavigation previousHref="/memories" nextHref="/time" />
    </>
  );
}
