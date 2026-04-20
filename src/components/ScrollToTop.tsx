import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // როცა pathname (ლინკი) იცვლება, ვსქროლავთ ზემოთ
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // ეს კომპონენტი ვიზუალურად არაფერს აბრუნებს
};