'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    
    if (!section || !cards) return;

    const ctx = gsap.context(() => {
      gsap.from('.card-item', {
        y: 100,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'center center',
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="sticky top-0 h-screen bg-white flex items-center justify-center px-8 overflow-hidden"
      style={{ zIndex: 2 }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>

      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none z-10" />
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />

      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-white/60" />

      <div className="relative z-10 max-w-6xl w-full">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-20 tracking-tight card-item">
          HOW YOU CAN HONOUR THEIR MEMORY
        </h2>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Attend a Ceremony */}
          <div className="card-item text-center">
            <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center mb-8 mx-auto bg-white/80">
              <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">ATTEND A CEREMONY</h3>
            <p className="text-gray-700 leading-relaxed">
              Join your local Remembrance Day ceremony on November 11th to pay tribute and observe a moment of silence.
            </p>
          </div>

          {/* Visit a Memorial */}
          <div className="card-item text-center">
            <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center mb-8 mx-auto bg-white/80">
              <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">VISIT A MEMORIAL</h3>
            <p className="text-gray-700 leading-relaxed">
              Take time to visit a war memorial or cemetery to reflect on the sacrifices made by those who served.
            </p>
          </div>

          {/* Wear a Poppy */}
          <div className="card-item text-center">
            <div className="w-20 h-20 border-2 border-black rounded-full flex items-center justify-center mb-8 mx-auto bg-white/80">
              <svg className="w-10 h-10 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">WEAR A POPPY</h3>
            <p className="text-gray-700 leading-relaxed">
              Display a poppy with pride to show your respect and keep the memory of fallen soldiers alive.
            </p>
          </div>
        </div>

        <div className="text-center card-item">
          <a 
            href="https://www.legion.ca/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-16 py-5 text-xl font-bold hover:bg-gray-800 transition-all border-2 border-black"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </section>
  );
}

