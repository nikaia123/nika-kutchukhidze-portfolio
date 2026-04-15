
import { Header, type NavLink } from './Header';
import { Footer } from './Footer';
import React, { ReactNode } from 'react';

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
    <div className="main-layout">
      <Header links={navigationLinks} />
      
      <main>{children}</main>
      
      <Footer />
    </div>
  );
};