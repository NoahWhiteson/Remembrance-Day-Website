'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PoppyCoverAnimationProps {
  triggerRef: React.RefObject<HTMLElement>;
}

export default function PoppyCoverAnimation({ triggerRef }: PoppyCoverAnimationProps) {
  const topLeftRef = useRef<HTMLDivElement>(null);
  const topRightRef = useRef<HTMLDivElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate poppies IN from corners
      gsap.fromTo(
        [topLeftRef.current, topRightRef.current, bottomLeftRef.current, bottomRightRef.current],
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top center',
            end: 'center center',
            scrub: 1.5,
          },
        }
      );

      // Animate poppies OUT
      gsap.to(
        [topLeftRef.current, topRightRef.current, bottomLeftRef.current, bottomRightRef.current],
        {
          scale: 1.5,
          opacity: 0,
          duration: 1,
          ease: 'power2.in',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'bottom center',
            end: 'bottom top',
            scrub: 1.5,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [triggerRef]);

  return (
    <>
      {/* Top Left Poppy */}
      <div
        ref={topLeftRef}
        className="absolute -top-1/2 -left-1/2 w-[150vh] h-[150vh] opacity-0 pointer-events-none"
        style={{ transformOrigin: 'bottom right' }}
      >
        <Image
          src="/poppies/poppy.png"
          alt=""
          fill
          className="object-contain"
          style={{ transform: 'rotate(-15deg)' }}
        />
      </div>

      {/* Top Right Poppy */}
      <div
        ref={topRightRef}
        className="absolute -top-1/2 -right-1/2 w-[150vh] h-[150vh] opacity-0 pointer-events-none"
        style={{ transformOrigin: 'bottom left' }}
      >
        <Image
          src="/poppies/poppy2.png"
          alt=""
          fill
          className="object-contain"
          style={{ transform: 'rotate(15deg)' }}
        />
      </div>

      {/* Bottom Left Poppy */}
      <div
        ref={bottomLeftRef}
        className="absolute -bottom-1/2 -left-1/2 w-[150vh] h-[150vh] opacity-0 pointer-events-none"
        style={{ transformOrigin: 'top right' }}
      >
        <Image
          src="/poppies/poppy2.png"
          alt=""
          fill
          className="object-contain"
          style={{ transform: 'rotate(15deg)' }}
        />
      </div>

      {/* Bottom Right Poppy */}
      <div
        ref={bottomRightRef}
        className="absolute -bottom-1/2 -right-1/2 w-[150vh] h-[150vh] opacity-0 pointer-events-none"
        style={{ transformOrigin: 'top left' }}
      >
        <Image
          src="/poppies/poppy.png"
          alt=""
          fill
          className="object-contain"
          style={{ transform: 'rotate(-15deg)' }}
        />
      </div>
    </>
  );
}

