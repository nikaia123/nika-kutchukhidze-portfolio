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
    <div className="flex flex-col bg-[#0d0d0d] border border-white/5 hover:border-[#D4A843]/25 rounded-[3px] overflow-hidden max-w-[380px] w-full hover:shadow-xl hover:shadow-[#D4A843]/10 hover:scale-105 transition-all duration-300 group cursor-pointer">
      {/* Image */}
      <div className="h-[220px] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d0d] z-10" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale-[30%] brightness-50 group-hover:grayscale-0 group-hover:brightness-75 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-grow">
        
        {/* Title */}
        <h3 className="font-['Cormorant_Garamond'] font-semibold text-[1.45rem] text-[#D4A843] group-hover:text-[#F5D98B] mb-3 tracking-[0.04em] transition-colors duration-300">
          {title}
        </h3>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => <Badge key={tag} label={tag} />)}
          </div>
        )}

        {/* Description */}
        <p className="font-['DM_Sans'] font-light text-[0.85rem] text-[#6a6a6a] leading-[1.8] flex-grow mb-6">
          {description}
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4A843]/15 to-transparent mb-6" />

        {/* Actions */}
        <div className="flex gap-3">
          <Button variant="primary" className="flex-1">დეტალები</Button>
          <Button variant="secondary">Link</Button>
        </div>
      </div>
    </div>
  );
};