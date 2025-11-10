'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RespectSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollContainer = scrollContainerRef.current;
    
    if (!container || !scrollContainer) return;

    const ctx = gsap.context(() => {
      const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

      gsap.to(scrollContainer, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${scrollWidth * 0.8}`,
          scrub: 1,
          pin: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-white">
      <div ref={scrollContainerRef} className="flex w-fit">
        {/* William Harold McMullen */}
        <div className="relative h-screen w-screen flex-shrink-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-8 md:py-16 bg-white">
          <div className="relative w-full md:w-[35vw] h-[40vh] md:h-[80vh] mb-6 md:mb-0">
            <Image src="/people/williamharold.png" alt="William Harold McMullen" fill className="object-cover grayscale" />
          </div>
          <div className="w-full md:w-[45vw] flex flex-col justify-center space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">WILLIAM HAROLD McMULLEN</h2>
            <div className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
              <p className="mb-4 md:mb-6">William Harold McMullen was a corporal in the military. He died on November 19th, 1944 at the young age of 27.</p>
              <p className="mb-4 md:mb-6">He was the son of John and Mary A. McMullen. His service number was B/89151.</p>
              <p className="font-medium text-black">May he rest in peace.</p>
            </div>
          </div>
        </div>

        {/* Murray Hoffman */}
        <div className="relative h-screen w-screen flex-shrink-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-8 md:py-16 bg-white">
          <div className="relative w-full md:w-[35vw] h-[40vh] md:h-[80vh] mb-6 md:mb-0">
            <Image src="/people/murrayhoffman.png" alt="Lieutenant Murray Hoffman" fill className="object-cover grayscale" />
          </div>
          <div className="w-full md:w-[45vw] flex flex-col justify-center space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">LIEUTENANT MURRAY HOFFMAN</h2>
            <div className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
              <p className="mb-4 md:mb-6">Murray Hoffman was a brave lieutenant in World War 2. He died on December 19, 1944 and was buried in Italy, in the Ravenna War Cemetery.</p>
              <p className="mb-4 md:mb-6">He had many medals of achievement and one was found. We don't have the information of how old he was when he passed away, but he guided his troop valiantly through the war.</p>
              <p className="font-medium text-black">He will be remembered.</p>
            </div>
          </div>
        </div>

        {/* Kenneth Heron */}
        <div className="relative h-screen w-screen flex-shrink-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-8 md:py-16 bg-white">
          <div className="relative w-full md:w-[35vw] h-[40vh] md:h-[80vh] mb-6 md:mb-0">
            <Image src="/people/kennetheron.png" alt="Flying Officer Kenneth Heron" fill className="object-cover grayscale" />
          </div>
          <div className="w-full md:w-[45vw] flex flex-col justify-center space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">KENNETH HERON</h2>
            <div className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
              <p className="mb-4 md:mb-6">Kenneth Heron was a Flying Officer in the military. He died on July 25, 1944. At the time he died, he was 22 years old.</p>
              <p className="mb-4 md:mb-6">His parents were Sheldon and Elsie Heron of Toronto, Ontario. His service number was J/25704.</p>
              <p className="font-medium text-black">Thank you, Mr. Heron.</p>
            </div>
          </div>
        </div>

        {/* Owen McFarlane */}
        <div className="relative h-screen w-screen flex-shrink-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-8 md:py-16 bg-white">
          <div className="relative w-full md:w-[35vw] h-[40vh] md:h-[80vh] mb-6 md:mb-0">
            <Image src="/people/owenmcfarlane.png" alt="Lance Sergeant Owen McFarlane" fill className="object-cover grayscale" />
          </div>
          <div className="w-full md:w-[45vw] flex flex-col justify-center space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">OWEN McFARLANE</h2>
            <div className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
              <p className="mb-4 md:mb-6">Bruce McFarlane was a Lance Sergeant at the time of his death in the military. He died on February 26, 1945. We don't have the age of death but any age to die in war is too young.</p>
              <p className="mb-4 md:mb-6">He was the son of John Cowan McFarlane and Myrtle Irene MacFarlane. His service number was B/19543.</p>
              <p className="font-medium text-black">You will always be remembered.</p>
            </div>
          </div>
        </div>

        {/* Arthur Palmer */}
        <div className="relative h-screen w-screen flex-shrink-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-8 md:py-16 bg-white">
          <div className="relative w-full md:w-[35vw] h-[40vh] md:h-[80vh] mb-6 md:mb-0">
            <Image src="/people/arthurpalmer.png" alt="Sergeant Arthur Palmer" fill className="object-cover grayscale" />
          </div>
          <div className="w-full md:w-[45vw] flex flex-col justify-center space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">ARTHUR PALMER</h2>
            <div className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
              <p className="mb-4 md:mb-6">Arthur George Palmer was a proud sergeant in World War 2. He was born in England and came to Canada as a boy and lived on Clendenan ave. He was killed in Italy on January 13 in 1944.</p>
              <p className="mb-4 md:mb-6">He had a family and was a son to Mr. and Mrs. Alfred John Palmer. He also had a wife Elvira E. M. Palmer. He fought in the 1st division and his service number was B/11618. He was also buried in Italy in the Cassino War Cemetery.</p>
              <p className="font-medium text-black">He was only 29 years old when he was shot down and we thank him for his service.</p>
            </div>
          </div>
        </div>

        {/* Gordon Harrison */}
        <div className="relative h-screen w-screen flex-shrink-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-8 md:py-16 bg-white">
          <div className="relative w-full md:w-[35vw] h-[40vh] md:h-[80vh] mb-6 md:mb-0">
            <Image src="/people/gordonharrison.png" alt="Warrant Officer Gordon Harrison" fill className="object-cover grayscale" />
          </div>
          <div className="w-full md:w-[45vw] flex flex-col justify-center space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">GORDON HARRISON</h2>
            <div className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
              <p className="mb-4 md:mb-6">Gordon Fletcher Harrison was a Warrant Officer at the time of his death. His date of death was August 6, 1944.</p>
              <p className="mb-4 md:mb-6">His service number was R/112810.</p>
              <p className="font-medium text-black">Rest in peace, Mr. Harrison.</p>
            </div>
          </div>
        </div>

        {/* Charles McMullen */}
        <div className="relative h-screen w-screen flex-shrink-0 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-8 md:py-16 bg-white">
          <div className="relative w-full md:w-[35vw] h-[40vh] md:h-[80vh] mb-6 md:mb-0">
            <Image src="/people/charlesmcmullen.png" alt="Bombardier Charles McMullen" fill className="object-cover grayscale" />
          </div>
          <div className="w-full md:w-[45vw] flex flex-col justify-center space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight">CHARLES McMULLEN</h2>
            <div className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
              <p className="mb-4 md:mb-6">In World War 1 Charles Henry Fox was a bombardier. He was born on October 17th of 1892, and he passed away on April 30th or 1916. He was 21 years old when he died and was buried in 'RENINGHELST NEW MILITARY CEMETERY' in Belgium.</p>
              <p className="mb-4 md:mb-6">He was the son of widowed Elizabeth Ann Fox and a brother to Harold and Charles and lived on Clendenan Ave.</p>
              <p className="font-medium text-black">May he rest in peace.</p>
            </div>
          </div>
        </div>

        {/* And 118,000 More */}
        <div className="relative h-screen w-screen flex-shrink-0 flex items-center justify-center px-6 md:px-20 py-8 md:py-16 bg-white">
          <div className="text-center max-w-4xl px-4">
            <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter mb-8 md:mb-12">
              AND 118,000 MORE
            </h2>
            <p className="text-lg md:text-2xl lg:text-3xl leading-relaxed text-gray-700 mb-6 md:mb-8">
              Over 118,000 Canadians made the ultimate sacrifice in World War I and World War II.
            </p>
            <p className="text-base md:text-xl leading-relaxed text-gray-600">
              Each one had a story. Each one had a family. Each one will be remembered.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
