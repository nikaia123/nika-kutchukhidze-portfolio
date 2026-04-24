import React, { memo } from 'react';
import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = memo(({
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-['DM_Sans'] font-light text-[0.72rem] tracking-[0.25em] uppercase px-[2.2rem] py-[0.85rem] rounded-[2px] cursor-pointer transition-all duration-300 whitespace-nowrap hover:scale-95";

  const variantClasses = {
    primary: "bg-[#D4A843] text-[#080808] border-none hover:bg-[#b08b35] shadow-[0_0_15px_rgba(212,168,67,0.2)]",
    secondary: "bg-transparent text-[#D4A843] border border-[#D4A843] hover:bg-[#D4A843] hover:text-[#080808]",
    outline: "bg-transparent text-[#888] border border-white/10 hover:border-[#D4A843] hover:text-[#D4A843]"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});