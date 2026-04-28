import React from 'react';

interface BadgeProps {
  label: string;
}

export const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span className="inline-block px-2.5 py-[3px] text-[0.6rem] font-sans font-normal tracking-[0.2em] uppercase text-[#A67C2E] bg-accent/[0.07] border border-accent/[0.18] rounded-[1px]">
      {label}
    </span>
  );
};