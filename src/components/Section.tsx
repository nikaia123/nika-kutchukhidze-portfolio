import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section
      id={id}
      style={{
        padding: '7rem 2.5rem',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      {/* Section header */}
      <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
        
        {/* Ornament above */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.4))' }} />
          <div style={{ width: '4px', height: '4px', background: 'rgba(212,168,67,0.5)', transform: 'rotate(45deg)' }} />
          <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, rgba(212,168,67,0.4), transparent)' }} />
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
          letterSpacing: '0.06em',
          color: '#c8c8c8',
          margin: '0 0 1.5rem 0',
          lineHeight: '1.1',
        }}>
          {title}
        </h2>

        {/* Ornament below */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <div style={{ width: '30px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.3))' }} />
          <div style={{ width: '50px', height: '1px', background: 'rgba(212,168,67,0.5)' }} />
          <div style={{ width: '30px', height: '1px', background: 'linear-gradient(90deg, rgba(212,168,67,0.3), transparent)' }} />
        </div>
      </div>

      <div style={{ width: '100%' }}>
        {children}
      </div>
    </section>
  );
};