import type  { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "px-6 py-2.5 rounded-xl font-bold transition-all duration-300 backdrop-blur-md active:scale-95 flex justify-center items-center tracking-wide";
  
  const variants = {
    primary: "bg-gradient-to-r from-yellow-500 to-amber-600 text-black hover:from-yellow-400 hover:to-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.4)] border border-yellow-300/50",

    secondary: "bg-black/60 text-yellow-500 hover:bg-yellow-500/10 border border-yellow-500/30 hover:border-yellow-500/70",
    outline: "bg-transparent border-2 border-yellow-600/50 text-yellow-500 hover:bg-yellow-600/10"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};