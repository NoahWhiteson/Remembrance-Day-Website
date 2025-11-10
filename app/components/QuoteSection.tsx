import Image from 'next/image';

export default function QuoteSection() {
  return (
    <section className="relative min-h-screen bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Bottom fade to white */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent pointer-events-none z-20" />
        
        {/* Left Poppy */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px]">
          <Image
            src="/poppies/poppy.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Right Poppy */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px]">
          <Image
            src="/poppies/poppy2.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        <div className="relative z-10 max-w-4xl text-center px-8">
          <blockquote className="text-4xl md:text-5xl lg:text-6xl font-light italic leading-relaxed text-black">
            "At the going down of the sun and in the morning, we will remember them."
          </blockquote>
          <p className="mt-12 text-xl md:text-2xl text-gray-600">
            — Laurence Binyon, <em>For the Fallen</em>
          </p>
        </div>
      </div>
    </section>
  );
}

