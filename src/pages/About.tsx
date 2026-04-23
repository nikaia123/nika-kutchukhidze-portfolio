import React from 'react';
import { Section } from '../components/Section';

export const About: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#c8c8c8', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <Section title="ჩემ შესახებ">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
          className="md:flex-row"
        >

          {/* Photo */}
          <div style={{ flexShrink: 0 }}>
            <div style={{
              width: '260px',
              height: '320px',
              position: 'relative',
            }}>
              {/* Corner ornaments */}
              <div style={{ position: 'absolute', top: '-8px', left: '-8px', width: '24px', height: '24px', borderTop: '1px solid rgba(212,168,67,0.5)', borderLeft: '1px solid rgba(212,168,67,0.5)' }} />
              <div style={{ position: 'absolute', top: '-8px', right: '-8px', width: '24px', height: '24px', borderTop: '1px solid rgba(212,168,67,0.5)', borderRight: '1px solid rgba(212,168,67,0.5)' }} />
              <div style={{ position: 'absolute', bottom: '-8px', left: '-8px', width: '24px', height: '24px', borderBottom: '1px solid rgba(212,168,67,0.5)', borderLeft: '1px solid rgba(212,168,67,0.5)' }} />
              <div style={{ position: 'absolute', bottom: '-8px', right: '-8px', width: '24px', height: '24px', borderBottom: '1px solid rgba(212,168,67,0.5)', borderRight: '1px solid rgba(212,168,67,0.5)' }} />

              <img
                src="src/assets/user.avif"
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(20%) brightness(0.8)',
                  border: '1px solid rgba(212,168,67,0.12)',
                }}
                onMouseEnter={e => (e.target as HTMLElement).style.filter = 'grayscale(0%) brightness(0.9)'}
                onMouseLeave={e => (e.target as HTMLElement).style.filter = 'grayscale(20%) brightness(0.8)'}
              />
            </div>
          </div>

          {/* Text */}
          <div style={{
            flexGrow: 1,
            background: 'rgba(13,13,13,0.8)',
            border: '1px solid rgba(255,255,255,0.04)',
            padding: '3rem',
            position: 'relative',
          }}>
            {/* Top gold accent */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '3rem',
              right: '3rem',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)',
            }} />

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: '1.1rem',
              lineHeight: '2',
              color: '#888',
              marginBottom: '1.5rem',
            }}>
              გამარჯობა, მე ვარ{' '}
              <strong style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                color: '#D4A843',
              }}>
                ნიკოლოზ კუჭუხიძე
              </strong>
              , Frontend Web Developer. მივესალმები თანამედროვე ვებ-ტექნოლოგიებს და ვიზუალურ ესთეტიკას.
            </p>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: '1.1rem',
              lineHeight: '2',
              color: '#666',
              marginBottom: '2rem',
            }}>
              ძირითადად ვმუშაობ{' '}
              <span style={{ color: '#A67C2E' }}>React</span>,{' '}
              <span style={{ color: '#A67C2E' }}>TypeScript</span> და{' '}
              <span style={{ color: '#A67C2E' }}>Tailwind CSS</span> ტექნოლოგიებით.
            </p>

            {/* Skills row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '1.5rem' }}>
              {['React', 'TypeScript', 'Tailwind CSS', 'UI/UX'].map(skill => (
                <span key={skill} style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 200,
                  fontSize: '0.65rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#555',
                  borderBottom: '1px solid rgba(212,168,67,0.25)',
                  paddingBottom: '2px',
                }}>
                  {skill}
                </span>
              ))}
            </div>

            {/* Bottom gold accent */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '3rem',
              right: '3rem',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.3), transparent)',
            }} />
          </div>
        </div>
      </Section>
    </div>
  );
};