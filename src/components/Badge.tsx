import React from 'react';

interface BadgeProps {
  label: string;
}

export const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span className="px-3 py-1 text-xs font-bold tracking-widest text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 rounded-full backdrop-blur-sm uppercase shadow-inner">
      {label}
    </span>
  );
};