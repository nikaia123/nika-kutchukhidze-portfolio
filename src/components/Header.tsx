import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMobileMenu } from '../hooks/useMobileMenu';

export interface NavLink {
  label: string;
  path: string;
}

interface HeaderProps {
  links: NavLink[];
}

export const Header: React.FC<HeaderProps> = ({ links }) => {
  const { isOpen, toggleMenu } = useMobileMenu(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,168,67,0.12)' : '1px solid transparent',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="src/assets/NK-removebg-preview.png" alt="logo" width={160} height={160} style={{ objectFit: 'contain' }} />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '3rem' }} className="hidden md:flex">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  textDecoration: 'none',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.78rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: isActive ? '#D4A843' : '#888',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                  paddingBottom: '4px',
                }}
                onMouseEnter={e => { if (!isActive) (e.target as HTMLElement).style.color = '#D4A843'; }}
                onMouseLeave={e => { if (!isActive) (e.target as HTMLElement).style.color = '#888'; }}
              >
                {link.label}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, #D4A843, transparent)',
                  }} />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden"
          style={{
            background: 'none',
            border: '1px solid rgba(212,168,67,0.3)',
            borderRadius: '4px',
            padding: '8px 12px',
            color: '#D4A843',
            fontSize: '1rem',
            cursor: 'pointer',
            letterSpacing: '0.1em',
          }}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav
          className="md:hidden"
          style={{
            position: 'absolute',
            top: '80px',
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(8,8,8,0.98)',
            borderBottom: '1px solid rgba(212,168,67,0.1)',
            padding: '2rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={toggleMenu}
              style={{
                textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: '0.85rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: location.pathname === link.path ? '#D4A843' : '#777',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
