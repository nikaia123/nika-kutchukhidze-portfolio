import React, { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-black">
      <div className="mb-20 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 inline-block relative tracking-wide">
          {title}
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full shadow-[0_0_15px_rgba(234,179,8,0.8)]" />
        </h2>
      </div>
      
      <div className="w-full">
        {children}
      </div>
    </section>
  );
};