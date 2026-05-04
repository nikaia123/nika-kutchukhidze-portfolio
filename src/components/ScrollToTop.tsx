import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // როცა pathname (ლინკი) იცვლება, ვსქროლავთ ზემოთ
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null; // ეს კომპონენტი ვიზუალურად არაფერს აბრუნებს
};