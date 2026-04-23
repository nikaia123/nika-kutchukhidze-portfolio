import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      background: '#080808',
      borderTop: '1px solid rgba(212,168,67,0.1)',
      padding: '4rem 2.5rem 3rem',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Main footer row */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          
          {/* Brand */}
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: '1.6rem',
            letterSpacing: '0.25em',
            background: 'linear-gradient(135deg, #F5D98B, #D4A843, #A67C2E)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            MR. NIKA
          </div>

          {/* Thin gold line */}
          <div style={{ width: '80px', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,168,67,0.5), transparent)' }} />

          {/* Social links */}
          <div style={{ display: 'flex', gap: '3rem' }}>
            {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href={`#${social.toLowerCase()}`}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.7rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#444',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#D4A843'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#444'}
              >
                {social}
              </a>
            ))}
          </div>

          {/* Contact */}
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 200,
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            color: '#333',
          }}>
            info@example.com
          </p>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.04)',
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 200,
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            color: '#2a2a2a',
            textTransform: 'uppercase',
          }}>
            &copy; {new Date().getFullYear()} — ყველა უფლება დაცულია
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            {[{ label: 'Privacy Policy', path: '/privacy' }, { label: 'Terms & Conditions', path: '/terms' }].map((item, i) => (
              <React.Fragment key={item.path}>
                {i > 0 && <span style={{ color: '#1a1a1a', fontSize: '0.6rem' }}>·</span>}
                <Link
                  to={item.path}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.65rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#2a2a2a',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#D4A843'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = '#2a2a2a'}
                >
                  {item.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};