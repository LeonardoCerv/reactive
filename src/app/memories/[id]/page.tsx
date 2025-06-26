import { notFound } from "next/navigation";
import Image from "next/image";

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

export default function MemoryDetail({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  const memory = images[id];
  if (!memory) return notFound();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h2 className="text-3xl font-bold mb-4">Memory #{id + 1}</h2>
      <Image src={memory.src} alt={memory.alt} width={400} height={400} className="rounded-xl shadow-lg mb-4" />
      <p className="text-lg text-muted-foreground mb-2">{memory.alt}</p>
      <span className="text-sm text-primary">Hint: {memory.hint}</span>
    </div>
  );
}
