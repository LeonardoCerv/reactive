import PhotoGallery from "@/components/PhotoGallery";
import TimelineNavigation from "@/components/TimelineNavigation";

export default function MemoriesPage() {
  const images = [
    { src: '', alt: "A cherished memory", hint: "couple smiling" },
    { src: '', alt: "A fun day out", hint: "beach sunset" },
    { src: '', alt: "A special moment", hint: "holding hands" },
    { src: '', alt: "A silly face", hint: "city lights" },
    { src: '', alt: "Our favorite place", hint: "mountain hike" },
    { src: '', alt: "An unforgettable trip", hint: "cafe window" },
    { src: '', alt: "Just us", hint: "park picnic" },
    { src: '', alt: "Anniversary dinner", hint: "fancy dinner" },
  ];

  return (
    <>
      <div className="flex-grow">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Our Scrapbook</h1>
          <p className="text-lg text-muted-foreground mt-2">A collection of moments we've scattered in time.</p>
          <p className="text-sm text-muted-foreground mt-1 italic">(Hint: Click on a photo!)</p>
        </div>
        <PhotoGallery images={images} />
      </div>
      <TimelineNavigation previousHref="/" nextHref="/letter" />
    </>
  );
}
