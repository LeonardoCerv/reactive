import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  hint: string;
};

type PhotoGalleryProps = {
  images: ImageProps[];
};

const photoStyles = [
  { top: '5%', left: '10%', rotate: '-8deg', width: 250, height: 350 },
  { top: '15%', left: '50%', rotate: '5deg', width: 300, height: 200 },
  { top: '50%', left: '20%', rotate: '10deg', width: 280, height: 280 },
  { top: '60%', left: '65%', rotate: '-3deg', width: 250, height: 320 },
  { top: '30%', left: '75%', rotate: '12deg', width: 320, height: 250 },
  { top: '70%', left: '5%', rotate: '-5deg', width: 200, height: 300 },
  { top: '5%', left: '80%', rotate: '2deg', width: 220, height: 300 },
  { top: '45%', left: '40%', rotate: '-15deg', width: 300, height: 300 },
];


export default function PhotoGallery({ images }: PhotoGalleryProps) {
  return (
    <div className="relative w-full h-[120vh] md:h-[100vh] -translate-y-32">
      {images.map((image, index) => {
        const style = photoStyles[index % photoStyles.length];
        return (
          <div
            key={index}
            className="absolute p-3 pb-8 bg-card shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:z-10"
            style={{
              top: style.top,
              left: style.left,
              transform: `rotate(${style.rotate}) translateZ(0)`,
              width: `${style.width}px`,
            }}
          >
            <a href={`/memories/${index}`}>
              {image.src ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={style.width}
                  height={style.height}
                  data-ai-hint={image.hint}
                  className="object-cover w-full h-auto rounded-lg border border-primary"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-[180px] md:h-[200px] rounded-lg border border-dashed border-primary bg-muted">
                  <span className="text-muted-foreground text-lg">No Image</span>
                </div>
              )}
            </a>
            <p className="text-center font-body text-sm mt-3 text-muted-foreground">{image.alt}</p>
          </div>
        );
      })}
    </div>
  );
}
