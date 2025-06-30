import PhotoGallery from "@/components/PhotoGallery";
import TimelineNavigation from "@/components/TimelineNavigation";

export default function MemoriesPage() {
  const images = [
    { src: '/img4.jpg', alt: "A cherished memory", hint: "couple smiling" },
    { src: '/img8.jpg', alt: "A fun day out", hint: "beach sunset" },
    { src: '/img1.jpg', alt: "A special moment", hint: "holding hands" },
    { src: '/img2.jpg', alt: "A no face photo", hint: "beach trip" },
    { src: '/img5.jpg', alt: "Our favorite place", hint: "mountain hike" },
    { src: '/img7.jpg', alt: "An unforgettable trip", hint: "surfing" },
    { src: '/img6.jpg', alt: "Just us", hint: "park picnic" },
    { src: '/img3.jpg', alt: "Anniversary dinner", hint: "fancy dinner" },
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
