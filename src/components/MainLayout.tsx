import React from 'react';
import { Header, type NavLink } from './Header';
import { Footer } from './Footer';
import  type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const navigationLinks: NavLink[] = [
  
  { label: 'მთავარი', path: '/' },
  { label: 'ჩვენ შესახებ', path: '/about' },
  { label: 'კონტაქტი', path: '/contact' }
];

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main-layout text-sm md:text-base">
      <Header links={navigationLinks} />
      
      <main>{children}</main>
      
      <Footer />
    </div>
  );
};