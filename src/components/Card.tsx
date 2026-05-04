import React, { memo } from 'react';
import { Button } from './Button';
import { Badge } from './Badge';
import { Link } from 'react-router-dom';

export interface CardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  tags?: string[];
  link: string;
}

export const Card: React.FC<CardProps> = memo(({ id, title, image, description, tags = [], link }) => {
  return (
    <div className="flex flex-col bg-[#0d0d0d] border border-white/5 hover:border-[#D4A843]/25 rounded-[3px] overflow-hidden max-w-[380px] w-full hover:shadow-xl hover:shadow-[#D4A843]/10 hover:scale-105 transition-all duration-300 group cursor-pointer">
      <div className="h-[220px] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d0d] z-10" />
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover grayscale-[30%] brightness-50 group-hover:grayscale-0 group-hover:brightness-75 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
      </div>

      <div className="p-7 flex flex-col flex-grow">
        
        <h3 className="font-['Cormorant_Garamond'] font-semibold text-[1.45rem] text-[#D4A843] group-hover:text-[#F5D98B] mb-3 tracking-[0.04em] transition-colors duration-300">
          {title}
        </h3>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag) => <Badge key={tag} label={tag} />)}
          </div>
        )}

        <p className="font-['DM_Sans'] font-light text-[0.85rem] text-[#6a6a6a] leading-[1.8] flex-grow mb-6">
          {description}
        </p>

        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4A843]/15 to-transparent mb-6" />

        <div className="flex gap-3">
          <Link to={`/project/${id}`} className="flex-1 no-underline">
            <Button variant="primary" className="w-full h-full text-center flex justify-center items-center">დეტალები</Button>
          </Link>
          <a href={link} target="_blank" rel="noreferrer" className="no-underline">
            <Button variant="secondary" className="h-full flex justify-center items-center">Link</Button>
          </a>
        </div>
      </div>
    </div>
  );
});