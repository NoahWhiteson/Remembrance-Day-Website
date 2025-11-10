'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FinalTribute() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.from(content.children, {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="sticky top-0 h-screen bg-white flex items-center justify-center px-8 overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Background Image with Grayscale */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/gravestones.png"
          alt=""
          fill
          className="object-cover grayscale opacity-30"
        />
        
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white via-white to-transparent" />
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white via-white to-transparent" />
        
        {/* Left fade */}
        <div className="absolute top-0 bottom-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent" />
        
        {/* Right fade */}
        <div className="absolute top-0 bottom-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent" />
      </div>

      <div ref={contentRef} className="relative z-10 max-w-5xl text-center">
        <h2 className="text-7xl md:text-8xl font-black mb-16 tracking-tight text-black">
          LEST WE FORGET
        </h2>

        <blockquote className="text-xl md:text-2xl italic leading-relaxed text-gray-800">
          "They shall grow not old, as we that are left grow old: <br />
          Age shall not weary them, nor the years condemn. <br />
          At the going down of the sun and in the morning <br />
          We will remember them."
        </blockquote>
      </div>
    </section>
  );
}

