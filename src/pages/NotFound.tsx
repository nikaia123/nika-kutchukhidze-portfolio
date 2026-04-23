import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../components/Section';
import { usePageTitle } from '../hooks/usePageTitle';

export const NotFound: React.FC = () => {
  usePageTitle('404 Not Found');

  return (
    <div className="min-h-[80vh] bg-primary text-text-main flex items-center justify-center">
      <Section title="404">
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <h2 style={{ 
            fontFamily: "'DM Sans', sans-serif", 
            fontWeight: 300, 
            fontSize: '1.5rem', 
            letterSpacing: '0.2em', 
            color: '#888' 
          }}>
            გვერდი ვერ მოიძებნა
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: '#666', maxWidth: '400px' }}>
            სამწუხაროდ, გვერდი რომელსაც ეძებთ არ არსებობს ან წაშლილია.
          </p>
          <Link 
            to="/" 
            style={{
              marginTop: '1rem',
              display: 'inline-block',
              background: 'transparent',
              color: '#D4A843',
              border: '1px solid #D4A843',
              padding: '0.8rem 2rem',
              textDecoration: 'none',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.background = '#D4A843';
              (e.target as HTMLElement).style.color = '#080808';
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.background = 'transparent';
              (e.target as HTMLElement).style.color = '#D4A843';
            }}
          >
            მთავარზე დაბრუნება
          </Link>
        </div>
      </Section>
    </div>
  );
};
