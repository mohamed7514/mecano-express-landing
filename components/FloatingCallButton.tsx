"use client";

import { useState } from "react";
import { business } from "@/lib/business";
import { trackCallClick } from "@/lib/gtag";

export function FloatingCallButton({ label }: { label: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[90] md:bottom-10 md:right-10 flex items-center gap-3 md:gap-4 pointer-events-none">
      
      {/* Permanent Call Now Label (Tooltip) */}
      <div 
        className={`pointer-events-auto transition-all duration-500 ease-out ${
          isHovered ? 'opacity-0 translate-x-4 pointer-events-none' : 'opacity-100 translate-x-0'
        }`}
      >
        <div className="bg-white text-graphite-950 font-black px-4 py-2.5 md:px-5 md:py-3 rounded-full shadow-2xl text-sm md:text-base uppercase tracking-wider whitespace-nowrap flex items-center gap-2.5 border-2 border-white/20"
             style={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}>
           <span className="relative flex h-2.5 w-2.5">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-good opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-signal-good"></span>
           </span>
           {label}
        </div>
      </div>

      <a
        href={`tel:${business.phone}`}
        data-call-cta
        onClick={trackCallClick}
        aria-label={`${label} ${business.phoneDisplay}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className="pointer-events-auto flex items-center justify-center rounded-full bg-accent text-white shadow-2xl transition-all duration-300 relative group border-4 border-white/10 shrink-0"
        style={{
          boxShadow: "0 10px 40px -10px rgba(254, 119, 0, 0.8), 0 0 20px 0 rgba(254, 119, 0, 0.4)",
        }}
      >
        {/* Continuous pulse ring */}
        <div className="absolute inset-0 rounded-full animate-pulse-glow" aria-hidden="true" />
        
        {/* Expansion container for hover state */}
        <div 
          className={`flex items-center overflow-hidden transition-all duration-500 ease-out ${
            isHovered ? 'max-w-[300px] px-2' : 'max-w-[84px] md:max-w-[96px]'
          }`}
        >
          {/* Icon */}
          <div className="h-[84px] w-[84px] md:h-[96px] md:w-[96px] flex shrink-0 items-center justify-center relative z-10 bg-accent rounded-full">
            <svg 
              className={`h-10 w-10 md:h-12 md:w-12 text-white ${isHovered ? '' : 'animate-ring'}`} 
              viewBox="0 0 24 24" 
              fill="currentColor" 
            >
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.03 21c.71 0 .97-.63.97-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
          </div>
          
          {/* Number and CTA (revealed on hover) */}
          <div 
            className={`flex flex-col justify-center whitespace-nowrap transition-all duration-500 ease-out ${
              isHovered ? 'opacity-100 mr-6 ml-2 translate-x-0' : 'opacity-0 w-0 translate-x-4'
            }`}
          >
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/90">
              {label}
            </span>
            <span className="font-display font-black text-xl md:text-2xl text-white">
              {business.phoneDisplay}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}
