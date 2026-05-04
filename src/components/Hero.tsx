import React, { memo, useCallback } from 'react';
import { Button } from './Button';

interface HeroProps {
  title: string;
  slogan: string;
  ctaText: string;
}

export const Hero: React.FC<HeroProps> = memo(({ title, slogan, ctaText }) => {
  const handleScrollToProjects = useCallback(() => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-8 overflow-hidden bg-primary">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(212,168,67,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[80px] bg-gradient-to-b from-transparent to-accent/40" />

      <div className="relative z-10 max-w-[900px]">

        <div className="inline-flex items-center gap-3 mb-10 animate-fade-up">
          <div className="w-[30px] h-[1px] bg-accent/50" />
          <span className="font-sans font-light text-[0.7rem] tracking-[0.35em] uppercase text-[#A67C2E]">
            Portfolio
          </span>
          <div className="w-[30px] h-[1px] bg-accent/50" />
        </div>

        <h1 className="font-serif font-light text-[clamp(3.5rem,9vw,8rem)] leading-tight py-2 tracking-[-0.02em] mb-6 bg-gradient-to-br from-accent-hover via-accent to-[#8a6020] text-transparent bg-clip-text">
          {title}
        </h1>

        <p className="font-sans font-extralight text-[clamp(0.75rem,1.5vw,0.9rem)] tracking-[0.35em] uppercase text-[#4a4a4a] mb-14">
          {slogan}
        </p>

        <div className="animate-fade-up">
          <Button 
            variant="primary" 
            onClick={handleScrollToProjects}
          >
            {ctaText}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-[80px] bg-gradient-to-t from-transparent to-accent/40" />

      <div className="absolute top-8 left-8 w-[30px] h-[30px] border-t border-l border-accent/20" />
      <div className="absolute top-8 right-8 w-[30px] h-[30px] border-t border-r border-accent/20" />
      <div className="absolute bottom-8 left-8 w-[30px] h-[30px] border-b border-l border-accent/20" />
      <div className="absolute bottom-8 right-8 w-[30px] h-[30px] border-b border-r border-accent/20" />
    </section>
  );
});