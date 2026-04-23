import { useState } from 'react';

export const useMobileMenu = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const toggleMenu = () => setIsOpen(!isOpen);
  return { isOpen, setIsOpen, toggleMenu };
};
