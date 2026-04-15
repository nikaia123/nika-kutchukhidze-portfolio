import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export interface NavLink {
  label: string;
  path: string;
}

interface HeaderProps {
  links: NavLink[];
}

export const Header: React.FC<HeaderProps> = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  
  return (
    <header>
      <div className="logo">
        <img src="src/assets/NK-removebg-preview.png " alt="" width={100} height={100} />
      </div>

      <nav className="desktop-nav">
        {links.map((link, index) => (
          <Link key={index} to={link.path}>
            {link.label}
          </Link>
        ))}
      </nav>

      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {isMenuOpen && (
        <nav className="mobile-menu">
          {links.map((link, index) => (
            <Link key={index} to={link.path} onClick={toggleMenu}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};