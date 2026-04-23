import React from 'react';
import { Button } from './Button';

interface HeroProps {
  title: string;
  slogan: string;
  ctaText: string;
}

export const Hero: React.FC<HeroProps> = ({ title, slogan, ctaText }) => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 2rem',
      overflow: 'hidden',
      background: '#080808',
    }}>

      {/* Radial gold glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(ellipse at center, rgba(212,168,67,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Top thin gold line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1px',
        height: '80px',
        background: 'linear-gradient(to bottom, transparent, rgba(212,168,67,0.4))',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }} className="animate-fade-up">

        {/* Eyebrow label */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '2.5rem',
        }} className="animate-fade-up">
          <div style={{ width: '30px', height: '1px', background: 'rgba(212,168,67,0.5)' }} />
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: '0.7rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#A67C2E',
          }}>Portfolio</span>
          <div style={{ width: '30px', height: '1px', background: 'rgba(212,168,67,0.5)' }} />
        </div>

        {/* Name - editorial display */}
        <h1
          className="animate-fade-up-delay-1"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            lineHeight: '1',
            letterSpacing: '-0.02em',
            marginBottom: '1.5rem',
            background: 'linear-gradient(160deg, #F5D98B 0%, #D4A843 40%, #8a6020 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          {title}
        </h1>

        {/* Slogan */}
        <p
          className="animate-fade-up-delay-2"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 200,
            fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: '#4a4a4a',
            marginBottom: '3.5rem',
          }}
        >
          {slogan}
        </p>

        {/* CTA */}
        <div className="animate-fade-up-delay-3">
          <Button variant="primary">
            {ctaText}
          </Button>
        </div>
      </div>

      {/* Bottom vertical line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1px',
        height: '80px',
        background: 'linear-gradient(to top, transparent, rgba(212,168,67,0.4))',
      }} />

      {/* Corner ornaments */}
      <div style={{ position: 'absolute', top: '2rem', left: '2rem', width: '30px', height: '30px', borderTop: '1px solid rgba(212,168,67,0.2)', borderLeft: '1px solid rgba(212,168,67,0.2)' }} />
      <div style={{ position: 'absolute', top: '2rem', right: '2rem', width: '30px', height: '30px', borderTop: '1px solid rgba(212,168,67,0.2)', borderRight: '1px solid rgba(212,168,67,0.2)' }} />
      <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', width: '30px', height: '30px', borderBottom: '1px solid rgba(212,168,67,0.2)', borderLeft: '1px solid rgba(212,168,67,0.2)' }} />
      <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', width: '30px', height: '30px', borderBottom: '1px solid rgba(212,168,67,0.2)', borderRight: '1px solid rgba(212,168,67,0.2)' }} />
    </section>
  );
};