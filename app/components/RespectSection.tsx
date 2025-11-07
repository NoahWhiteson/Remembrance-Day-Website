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
          end: () => `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <div ref={scrollContainerRef} className="flex w-fit">
        {/* William Harold McMullen Page */}
        <div
          className="relative h-screen flex-shrink-0 flex items-center justify-center px-8 py-8 overflow-hidden"
          style={{
            width: 'calc(100vw + 200px)',
            backgroundImage: 'url(/paper.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none" />
          
          <div className="relative max-w-5xl w-full h-full flex flex-col justify-center mx-auto">
        {/* Newspaper Header */}
        <div className="text-center mb-1.5 border-b-2 border-double border-black pb-1.5">
          <div className="relative w-full h-32 flex items-center justify-center">
            <Image
              src="/theremembrancetimes.png"
              alt="The Remembrance Times"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Issue Info */}
        <div className="flex justify-between text-[10px] mb-1.5 px-1 border-b border-black pb-1">
          <span>No. 1918</span>
          <span className="uppercase">Saturday, November 11, 1964</span>
          <span>Price 6d.</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-xl font-black text-center mb-2 tracking-wide border-b border-black pb-1.5">
          WILLIAM HAROLD McMULLEN
        </h2>

        {/* Three Column Layout */}
        <div className="grid grid-cols-3 gap-4">
          {/* Column 1 */}
          <div className="space-y-1.5 text-[11px] leading-tight text-justify">
            <p className="font-bold uppercase text-xs mb-1">
              Hero's Supreme Sacrifice Honored
            </p>
            <p>
              In the fields of Flanders, where poppies now grow between the crosses, row on row, brave soldiers like William Harold McMullen gave their lives for the freedom we hold dear today.
            </p>
            <p>
              Born to a family of humble means in rural Ontario, William answered the call of duty when his nation needed him most. He stood alongside his brothers in arms, facing unimaginable hardships with unwavering resolve.
            </p>
            <p>
              His letters home spoke of camaraderie, hope, and an unwavering belief in the cause for which he fought. These words remain a testament to his character.
            </p>
            <div className="border-t border-black pt-2 mt-3 text-center">
              <p className="font-black text-base italic">"Lest We Forget"</p>
              <p className="text-[9px] italic mt-0.5">We will remember them.</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-1.5 text-[11px] leading-tight text-justify">
            <div className="border-2 border-black p-1 mb-1.5">
              <div className="relative w-full aspect-[2/3]">
                <Image
                  src="/people/williamharold.png"
                  alt="William Harold McMullen"
                  fill
                  className="object-cover grayscale"
                />
              </div>
              <p className="text-center text-[10px] mt-1 font-bold">WILLIAM HAROLD McMULLEN</p>
              <p className="text-center text-[9px] italic">Fallen Hero of the Great War</p>
            </div>
            <p>
              At the going down of the sun and in the morning, we will remember them. William's sacrifice ensured that future generations could live in peace and freedom.
            </p>
            <p>
              His final letters home spoke of hope for a better world, one where such conflict would never again be necessary.
            </p>
          </div>

          {/* Column 3 */}
          <div className="space-y-1.5 text-[11px] leading-tight text-justify">
            <p>
              On this day, we pause to remember not just William, but all those who served and sacrificed. Their memory lives on in the freedoms we enjoy today.
            </p>
            <p>
              The poppy has become the enduring symbol of remembrance, worn close to the heart to honor those who fell.
            </p>
            <p>
              Each year, on the eleventh hour of the eleventh day of the eleventh month, we observe a moment of silence in their memory.
            </p>
            <p>
              "In Flanders fields the poppies blow, between the crosses, row on row." These immortal words by John McCrae capture the solemn beauty and tragedy of the battlefields.
            </p>
          </div>
        </div>
      </div>
    </div>

        {/* Murray Hoffman Page */}
        <div
          className="relative h-screen flex-shrink-0 flex items-center justify-center px-8 py-8 overflow-hidden -ml-[200px]"
          style={{
            width: 'calc(100vw + 200px)',
            backgroundImage: 'url(/paper.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            fontFamily: 'Georgia, "Times New Roman", Times, serif',
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white to-transparent pointer-events-none" />
          
          <div className="relative max-w-5xl w-full h-full flex flex-col justify-center mx-auto">
            {/* Newspaper Header */}
            <div className="text-center mb-1.5 border-b-2 border-double border-black pb-1.5">
              <div className="relative w-full h-32 flex items-center justify-center">
                <Image
                  src="/theremembrancetimes.png"
                  alt="The Remembrance Times"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Issue Info */}
            <div className="flex justify-between text-[10px] mb-1.5 px-1 border-b border-black pb-1">
              <span>No. 1918</span>
              <span className="uppercase">Saturday, November 11, 1964</span>
              <span>Price 6d.</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-xl font-black text-center mb-2 tracking-wide border-b border-black pb-1.5">
              LIEUTENANT MURRAY HOFFMAN
            </h2>

            {/* Three Column Layout */}
            <div className="grid grid-cols-3 gap-4">
              {/* Column 1 */}
              <div className="space-y-1.5 text-[11px] leading-tight text-justify">
                <p className="font-bold uppercase text-xs mb-1">
                  Lieutenant's Valor Lives On
                </p>
                <p>
                  Lieutenant Murray Hoffman exemplified the finest qualities of service and sacrifice. His dedication to duty and his fellow soldiers stands as a testament to the courage of those who served.
                </p>
                <p>
                  From the battlefields of Europe to the hearts of those who knew him, Murray's legacy endures. He faced each challenge with determination and grace, never wavering in his commitment to the cause.
                </p>
                <p>
                  His leadership inspired those under his command, and his bravery in the face of adversity earned him the respect of all who served alongside him.
                </p>
                <div className="border-t border-black pt-2 mt-3 text-center">
                  <p className="font-black text-base italic">"Lest We Forget"</p>
                  <p className="text-[9px] italic mt-0.5">We will remember them.</p>
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-1.5 text-[11px] leading-tight text-justify">
                <div className="border-2 border-black p-1 mb-1.5">
                  <div className="relative w-full aspect-[2/3]">
                    <Image
                      src="/people/murrayhoffman.png"
                      alt="Lieutenant Murray Hoffman"
                      fill
                      className="object-cover grayscale"
                    />
                  </div>
                  <p className="text-center text-[10px] mt-1 font-bold">LIEUTENANT MURRAY HOFFMAN</p>
                  <p className="text-center text-[9px] italic">Brave Officer of the Great War</p>
                </div>
                <p>
                  The sacrifice of officers like Lieutenant Hoffman ensured that the values of freedom and democracy were preserved for generations to come.
                </p>
                <p>
                  His memory serves as a reminder of the price of peace and the debt we owe to those who gave their all in service to their nation and comrades.
                </p>
              </div>

              {/* Column 3 */}
              <div className="space-y-1.5 text-[11px] leading-tight text-justify">
                <p>
                  Today we honor Lieutenant Murray Hoffman and all those who stood with him. Their courage in the face of unimaginable hardship reminds us of the strength of the human spirit.
                </p>
                <p>
                  The stories of these brave men and women continue to inspire new generations to uphold the values for which they fought and died.
                </p>
                <p>
                  As we gather each November to remember, we ensure that their sacrifice was not in vain and that their memory continues to guide us forward.
                </p>
                <p>
                  Lieutenant Hoffman's service represents the countless acts of heroism performed by ordinary people in extraordinary circumstances during the Great War.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

