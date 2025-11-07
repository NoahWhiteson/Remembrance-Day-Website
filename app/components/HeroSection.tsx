'use client';

import { useEffect, useRef } from 'react';

const VIDEO_OPACITY = 0.5; // Edit this value between 0 and 1 (lower = more transparent)

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = String(VIDEO_OPACITY);
    let fadeTimeout: NodeJS.Timeout;

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime;
      
      if (currentTime >= 88 && currentTime < 89) {
        video.style.transition = 'opacity 1s ease-out';
        video.style.opacity = '0';
        
        fadeTimeout = setTimeout(() => {
          video.currentTime = 0;
          video.style.transition = 'opacity 1s ease-in';
          video.style.opacity = String(VIDEO_OPACITY);
        }, 1000);
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      if (fadeTimeout) clearTimeout(fadeTimeout);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-white">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bgvideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent z-5" />

      <h1 className="relative z-10 text-[12vw] font-black tracking-tighter leading-none text-white mix-blend-difference px-8 text-center">
        LEST WE
        <br />
        FORGET
      </h1>
    </section>
  );
}

