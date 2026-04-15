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
    <div className="flex flex-col bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-1 duration-300 max-w-sm group">
      
      <div className="h-52 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
        />
      </div>

      <div className="p-6 flex flex-col flex-grow relative z-20 -mt-8">
        <h3 className="text-2xl font-bold text-white mb-2 tracking-wide drop-shadow-md">{title}</h3>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} label={tag} />
            ))}
          </div>
        )}

        <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-white/10 flex gap-3">
          <Button variant="primary" className="flex-1">ნახვა</Button>
          <Button variant="secondary">შენახვა</Button>
        </div>
      </div>

    </div>
  );
};