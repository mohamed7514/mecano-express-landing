"use client";

import { useState, useEffect } from "react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import Image from "next/image";
import Link from "next/link";

const SLIDE_IMAGES: Record<string, string> = {
  remorquage: "/remorquage.webp",
  lourd: "/camionlourd.webp",
  mecanique: "/photos/mecanique.webp",
};

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const SLIDES = dict.heroSlides.map((slide) => ({ ...slide, image: SLIDE_IMAGES[slide.id] }));

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [SLIDES.length]);

  return (
    <section className="bg-graphite-950 text-white min-h-[90vh] flex flex-col lg:flex-row pt-20 lg:pt-24">
      
      {/* IMAGE SIDE (Mobile Top / Desktop Left) */}
      <div className="relative w-full lg:w-1/2 h-[45vh] lg:h-auto shrink-0 overflow-hidden bg-black -mt-20 lg:mt-0">
         {SLIDES.map((slide, index) => (
           <div 
             key={slide.id}
             className={`absolute inset-0 transition-all duration-[2000ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
               index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
             }`}
           >
             <Image 
               src={slide.image}
               alt={`${slide.title} ${slide.highlight} — Mécano Express, Aylmer (Gatineau)`}
               fill
               className="object-contain object-center animate-premium-jump"
               priority={index === 0}
             />
             {/* Gradient to blend with text section */}
             <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-graphite-950" aria-hidden="true" />
           </div>
         ))}
         
         {/* Slider Indicators (Dots) */}
         <div className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-10 lg:translate-x-0 z-20 flex gap-3">
           {SLIDES.map((_, index) => (
             <button
               key={index}
               onClick={() => setCurrentSlide(index)}
               className={`h-2.5 rounded-full transition-all duration-300 ${
                 index === currentSlide ? 'w-8 bg-accent' : 'w-2.5 bg-white/40 hover:bg-white/70'
               }`}
               aria-label={`${dict.heroSlideLabel} ${index + 1}`}
             />
           ))}
         </div>
      </div>

      {/* TEXT SIDE (Mobile Bottom / Desktop Right) */}
      <div className="w-full lg:w-1/2 flex items-center p-6 sm:p-12 lg:p-16 xl:p-24 relative overflow-hidden">
        {/* Background color for the text area */}
        <div className="absolute inset-0 bg-graphite-950 z-0" aria-hidden="true" />
        
        <div className="relative z-10 w-full max-w-xl mx-auto lg:mx-0">
           
           {/* Text Slider using CSS Grid to stack them perfectly */}
           <div className="grid">
             {SLIDES.map((slide, index) => (
               <div 
                 key={slide.id}
                 style={{ gridArea: '1 / 1 / 2 / 2' }}
                 className={`transition-all duration-1000 ease-out flex flex-col justify-center ${
                   index === currentSlide 
                     ? 'opacity-100 translate-y-0 z-10' 
                     : 'opacity-0 translate-y-4 z-0 pointer-events-none'
                 }`}
               >
                 <div>
                   <span className="inline-block rounded-md bg-accent/10 border border-accent/20 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-accent mb-6">
                     {slide.tag}
                   </span>
                 </div>
                 {/* Only the first slide carries the <h1>. All three slides live
                     in the DOM at once for the crossfade, so making each one an
                     <h1> would ship three of them on every crawl. The rest are
                     <p> with identical styling — visually indistinguishable. */}
                 {index === 0 ? (
                   <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
                     {slide.title} <br />
                     <span className="text-accent">{slide.highlight}</span>
                   </h1>
                 ) : (
                   <p className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
                     {slide.title} <br />
                     <span className="text-accent">{slide.highlight}</span>
                   </p>
                 )}
                 <p className="text-lg leading-relaxed text-steel-200">
                   {slide.description}
                 </p>
               </div>
             ))}
           </div>

           <div className="mt-10 flex flex-wrap items-center gap-4">
             <Link href={`/${locale}/garage`} className="inline-flex items-center justify-center rounded-[var(--radius)] font-bold transition-colors bg-white/10 border border-white/20 text-white hover:bg-white/20 px-6 py-3.5 text-base gap-2.5">
               {dict.cta.allServices}
             </Link>
           </div>

           <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 border-t border-white/10 pt-8">
             <div>
                <p className="font-display text-2xl font-black text-white">15 min</p>
                <p className="text-sm font-medium text-steel-400">{dict.heroStats.arrivalLabel}</p>
             </div>
             <div>
                <p className="font-display text-2xl font-black text-white">24/7</p>
                <p className="text-sm font-medium text-steel-400">{dict.heroStats.hoursLabel}</p>
             </div>
             <div className="col-span-2 sm:col-span-1">
                <p className="font-display text-2xl font-black text-white">Gatineau</p>
                <p className="text-sm font-medium text-steel-400">{dict.heroStats.areaLabel}</p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
