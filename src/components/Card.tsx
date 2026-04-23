import React, { useState } from 'react';
import { Button } from './Button';
import { Badge } from './Badge';

export interface CardProps {
  title: string;
  image: string;
  description: string;
  tags?: string[];
}

export const Card: React.FC<CardProps> = ({ title, image, description, tags = [] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: '#0d0d0d',
        border: `1px solid ${hovered ? 'rgba(212,168,67,0.25)' : 'rgba(255,255,255,0.04)'}`,
        borderRadius: '3px',
        overflow: 'hidden',
        maxWidth: '380px',
        width: '100%',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: hovered
          ? '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,168,67,0.1)'
          : '0 10px 40px rgba(0,0,0,0.3)',
      }}
    >
      {/* Image */}
      <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, #0d0d0d)',
          zIndex: 1,
        }} />
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: hovered ? 'grayscale(0%) brightness(0.7)' : 'grayscale(30%) brightness(0.5)',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '1.8rem 2rem 2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        
        {/* Title */}
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600,
          fontSize: '1.45rem',
          color: hovered ? '#F5D98B' : '#D4A843',
          marginBottom: '0.75rem',
          letterSpacing: '0.04em',
          transition: 'color 0.3s ease',
        }}>
          {title}
        </h3>

        {/* Tags */}
        {tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
            {tags.map((tag) => <Badge key={tag} label={tag} />)}
          </div>
        )}

        {/* Description */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: '0.85rem',
          color: '#6a6a6a',
          lineHeight: '1.8',
          flexGrow: 1,
          marginBottom: '1.5rem',
        }}>
          {description}
        </p>

        {/* Divider */}
        <div style={{
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.15), transparent)',
          marginBottom: '1.5rem',
        }} />

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Button variant="primary" style={{ flex: 1 }}>დეტალები</Button>
          <Button variant="secondary">Link</Button>
        </div>
      </div>
    </div>
  );
};