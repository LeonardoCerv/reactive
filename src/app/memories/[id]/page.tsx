import { notFound } from "next/navigation";
import Image from "next/image";

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

export default function MemoryDetail({ params }: { params: { id: string } }) {
  const id = parseInt(params.id, 10);
  const memory = images[id];
  if (!memory) return notFound();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8">
      <h2 className="text-3xl font-bold mb-4">Memory #{id + 1}</h2>
      {memory.src ? (
        <Image src={memory.src} alt={memory.alt} width={400} height={400} className="rounded-xl shadow-lg mb-4" />
      ) : (
        <div className="flex items-center justify-center w-[400px] h-[400px] rounded-xl shadow-lg mb-4 border border-dashed border-primary bg-muted">
          <span className="text-muted-foreground text-lg">No Image</span>
        </div>
      )}
      <p className="text-lg text-muted-foreground mb-2">{memory.alt}</p>
      <span className="text-sm text-primary">Hint: {memory.hint}</span>
    </div>
  );
}
