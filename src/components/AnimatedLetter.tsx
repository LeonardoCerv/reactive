"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function AnimatedLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-[60vh] [perspective:1000px] sm:pt-0 pt-20">
      <div
        onClick={() => !isOpen && setIsOpen(true)}
        className={cn(
          "group relative w-[40rem] h-80 max-w-full rounded-lg shadow-2xl cursor-pointer transition-transform duration-700 [transform-style:preserve-3d]",
          !isOpen && "hover:-translate-y-2 hover:[transform:rotateX(15deg)]",
          isOpen && "pointer-events-none [transform:rotateX(0deg)]"
        )}
      >
        {/* Envelope Back & Body */}
        <div className="absolute top-0 left-0 w-full h-full bg-card rounded-lg [backface-visibility:hidden]">
          {/* This empty div forms the main body of the envelope */}
                    <div className="absolute w-full h-full">
            <div className="absolute top-0 left-0 w-1/2 h-full border-r border-primary/20 [clip-path:polygon(100%_0,_0_50%,_100%_100%)]"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full border-l border-primary/20 [clip-path:polygon(0_0,_100%_50%,_0_100%)]"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 border-t border-primary/20 [clip-path:polygon(0_0,_100%_0,_50%_100%)]"></div>
          </div>
        </div>

        {/* The Letter Paper that slides out */}
        <div
          className={cn(
            "absolute bg-background rounded-md shadow-inner transition-all duration-[1.2s] ease-in-out p-6 overflow-y-auto transform",
            isOpen
              ? "z-50 -translate-y-24 h-fit w-[50rem] left-1/2 -translate-x-1/2"
              : "z-0 top-[2px] left-[2.5%] w-[95%] translate-y-0 h-[calc(100%_-_4px)]"
          )}
        >
          <div
            className={cn(
              "transition-opacity duration-700",
              isOpen ? "opacity-100 delay-[1.2s]" : "opacity-0"
            )}
          >
            <p className="text-lg font-body leading-relaxed text-foreground/90">
              My Dearest,
            </p>
            <br />
            <p className="text-lg font-body leading-relaxed text-foreground/90">
              It feels like just yesterday we started this journey, and I can't believe it's already been two months. Every moment with you feels like a page out of a beautiful storybook. You've brought so much light and laughter into my life, and I cherish every memory we've made together.
            </p>
            <div className="flex flex-col md:flex-row gap-4 my-6">
              <Image src="https://placehold.co/300x200.png" data-ai-hint="happy couple" alt="A happy memory" width={300} height={200} className="rounded-md shadow-md transform -rotate-2" />
              <p className="text-lg font-body leading-relaxed text-foreground/90 flex-1 self-center">
                From our first date to our late-night talks, everything with you is special. I built this little app to celebrate us, a small token to show you how much you mean to me.
              </p>
            </div>
            <p className="text-lg font-body leading-relaxed text-foreground/90">
              Here's to many more chapters in our story. I can't wait to see what adventures await us.
            </p>
            <br />
            <p className="text-lg font-body leading-relaxed text-foreground/90">
              With all my love,
            </p>
            <div className="flex items-center gap-2 mt-4 font-headline text-xl text-primary">
              <span>Forever Yours</span>
              <Heart className="w-6 h-6 fill-current" />
            </div>
          </div>
        </div>
        
        {/* Envelope flap */}
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-1/2 bg-primary transition-transform duration-1000 transform-origin-top z-10 [transform-style:preserve-3d] [backface-visibility:hidden]",
            "[clip-path:polygon(0_0,_100%_0,_50%_100%)]",
            isOpen ? "[transform:rotateX(180deg)]" : "[transform:rotateX(0deg)]"
          )}
        />
      </div>
              <div
              onClick={() => !isOpen && setIsOpen(true)}
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%_+_1rem)] z-20 transition-all duration-700 ease-in-out rounded-full bg-pink-100 p-4",
            isOpen ? "opacity-0 scale-0 -translate-y-20" : "opacity-100 scale-100"
          )}
        >
          <Heart className="w-10 h-10 text-red-300 fill-red-300" />
        </div>
    </div>
  );
}
