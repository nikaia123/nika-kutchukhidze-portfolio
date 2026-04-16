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

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-yellow-500/20 w-full">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="logo flex items-center" >
          <img src="src/assets/NK-removebg-preview.png" alt="logo" width={200} height={200} />
          <Link to="/" className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600 tracking-wider">
          </Link>
        </div>

        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="text-gray-300 hover:text-yellow-500 font-medium tracking-wide transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button className="md:hidden text-yellow-500 text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden absolute top-20 left-0 w-full bg-black/95 border-b border-yellow-500/20 flex flex-col py-4 px-6 gap-4 shadow-2xl">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-yellow-500 text-lg font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};