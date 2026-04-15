import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "px-4 py-2 rounded-xl font-medium transition-all duration-300 backdrop-blur-md active:scale-95 flex justify-center items-center";
  
  const variants = {
    primary: "bg-indigo-600/80 text-white hover:bg-indigo-500/90 shadow-[0_0_15px_rgba(79,70,229,0.4)] border border-indigo-400/20",
    secondary: "bg-gray-800/60 text-gray-200 hover:bg-gray-700/80 border border-white/10 hover:border-white/20",
    outline: "bg-transparent border-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};