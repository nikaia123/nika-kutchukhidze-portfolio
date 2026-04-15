import React from 'react';
import { Button } from './Button';

interface HeroProps {
  title: string;
  slogan: string;
  ctaText: string;
}

export const Hero: React.FC<HeroProps> = ({ title, slogan, ctaText }) => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[85vh] text-center px-4 overflow-hidden bg-black">
      {/* ოქროსფერი უკანა ფონის ეფექტი (Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-yellow-600/15 blur-[150px] rounded-full z-0 pointer-events-none" />

      {/* კონტენტი */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl p-8 rounded-3xl">
        <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 via-yellow-500 to-amber-700 mb-6 drop-shadow-2xl tracking-tighter">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light tracking-widest max-w-2xl uppercase">
          {slogan}
        </p>
        <Button variant="primary" className="text-lg px-10 py-4 rounded-full shadow-yellow-500/30">
          {ctaText}
        </Button>
      </div>
    </section>
  );
};