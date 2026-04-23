import React from 'react';

interface BadgeProps {
  label: string;
}

export const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span style={{
      display: 'inline-block',
      padding: '3px 10px',
      fontSize: '0.6rem',
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 400,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#A67C2E',
      background: 'rgba(212,168,67,0.07)',
      border: '1px solid rgba(212,168,67,0.18)',
      borderRadius: '1px',
    }}>
      {label}
    </span>
  );
};