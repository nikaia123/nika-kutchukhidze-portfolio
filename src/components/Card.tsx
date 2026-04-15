import React from 'react';
import { Button } from './Button';
import { Badge } from './Badge';

export interface CardProps {
  title: string;
  image: string;
  description: string;
  tags?: string[];
}

export const Card: React.FC<CardProps> = ({ title, image, description, tags = [] }) => {
  return (
    <div className="flex flex-col bg-zinc-900/60 backdrop-blur-xl border border-white/5 hover:border-yellow-500/30 rounded-2xl overflow-hidden shadow-2xl transition-all hover:-translate-y-2 duration-500 max-w-sm group">
      
      <div className="h-56 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
        />
      </div>

      <div className="p-8 flex flex-col flex-grow relative z-20 -mt-12 bg-gradient-to-b from-transparent to-zinc-950">
        <h3 className="text-2xl font-bold text-yellow-500 mb-3 tracking-wide">{title}</h3>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <Badge key={tag} label={tag} />
            ))}
          </div>
        )}

        <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed font-light">
          {description}
        </p>
        
        <div className="mt-auto pt-5 border-t border-yellow-500/10 flex gap-4">
          <Button variant="primary" className="flex-1 text-sm">დეტალები</Button>
          <Button variant="secondary" className="text-sm">Link</Button>
        </div>
      </div>
    </div>
  );
};