import React, { useState, useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMobileMenu } from '../hooks/useMobileMenu';
import logo from '../assets/NK-removebg-preview.webp';

export interface NavLink {
  label: string;
  path: string;
}

interface HeaderProps {
  links: NavLink[];
}

export const Header: React.FC<HeaderProps> = memo(({ links }) => {
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
      className={`sticky top-0 z-50 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled
          ? 'bg-primary/95 backdrop-blur-[20px] border-b border-accent/10'
          : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-10 h-20 flex items-center justify-between">

        <Link to="/" className="no-underline flex items-center gap-3">
          <img src={logo} alt="ნიკა კუჭუხიძე - Portfolio Logo" width={160} height={160} className="object-contain" fetchPriority="high" decoding="sync" />
        </Link>

        <nav aria-label="მთავარი ნავიგაცია" className="hidden md:flex items-center gap-12">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans font-light text-[0.78rem] tracking-[0.2em] uppercase relative pb-1 transition-all duration-300 no-underline ${isActive
                    ? 'text-accent'
                    : 'text-text-muted hover:text-accent hover:underline underline-offset-[6px] decoration-accent'
                  }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={toggleMenu}
          aria-label={isOpen ? 'დახურე მენიუ' : 'გახსენი მენიუ'}
          className="md:hidden bg-transparent border border-accent/30 rounded px-3 py-2 text-accent text-base cursor-pointer tracking-widest"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="md:hidden fixed inset-0 top-20 bg-black/60 backdrop-blur-sm z-40"
            onClick={toggleMenu}
            aria-hidden="true"
          />
          <nav aria-label="მობილური ნავიგაცია" className="md:hidden absolute top-20 left-0 w-full bg-primary border-b border-accent/15 py-8 px-10 flex flex-col gap-6 z-50 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={toggleMenu}
                className={`no-underline font-sans font-light text-[0.85rem] tracking-[0.2em] uppercase transition-colors duration-300 ${location.pathname === link.path ? 'text-accent' : 'text-[#777] hover:text-accent'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </>
      )}
    </header>
  );
});
