import React from 'react';

interface BadgeProps {
  label: string;
}

export const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span className="px-3 py-1 text-xs font-semibold tracking-wider text-indigo-300 bg-indigo-900/30 border border-indigo-500/30 rounded-full backdrop-blur-sm uppercase shadow-inner">
      {label}
    </span>
  );
};