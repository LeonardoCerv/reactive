import TimeLeft from "@/components/TimeLeft";
import TimelineNavigation from "@/components/TimelineNavigation";

export default function MemoriesPage() {
  const images = [
    { src: "https://placehold.co/400x600.png", alt: "A cherished memory", hint: "couple smiling" },
    { src: "https://placehold.co/600x400.png", alt: "A fun day out", hint: "beach sunset" },
    { src: "https://placehold.co/400x400.png", alt: "A special moment", hint: "holding hands" },
    { src: "https://placehold.co/400x500.png", alt: "A silly face", hint: "city lights" },
    { src: "https://placehold.co/500x400.png", alt: "Our favorite place", hint: "mountain hike" },
    { src: "https://placehold.co/300x400.png", alt: "An unforgettable trip", hint: "cafe window" },
    { src: "https://placehold.co/400x300.png", alt: "Just us", hint: "park picnic" },
    { src: "https://placehold.co/500x500.png", alt: "Anniversary dinner", hint: "fancy dinner" },
  ];

  return (
    <>
      <div className="flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Time Together</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Every second with you is a memory I appreciate. Ever since we've met my life has been so much better.
          </p>
        </div>
        <TimeLeft />
      </div>
      <TimelineNavigation previousHref="/letter" nextHref="/" nextText="Start Over"  />
    </>
  );
}
