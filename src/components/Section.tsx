import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-28 px-10 max-w-[1400px] mx-auto w-full">
      <div className="mb-20 text-center">
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-[60px] h-[1px] bg-gradient-to-r from-transparent to-accent/40" />
          <div className="w-[4px] h-[4px] bg-accent/50 rotate-45" />
          <div className="w-[60px] h-[1px] bg-gradient-to-r from-accent/40 to-transparent" />
        </div>

        <h2 className="font-serif font-light text-[clamp(2.2rem,4vw,3.5rem)] tracking-[0.06em] text-text-main m-0 mb-6 leading-[1.1]">
          {title}
        </h2>

        <div className="flex items-center justify-center gap-2">
          <div className="w-[30px] h-[1px] bg-gradient-to-r from-transparent to-accent/30" />
          <div className="w-[50px] h-[1px] bg-accent/50" />
          <div className="w-[30px] h-[1px] bg-gradient-to-r from-accent/30 to-transparent" />
        </div>
      </div>

      <div className="w-full">
        {children}
      </div>
    </section>
  );
};