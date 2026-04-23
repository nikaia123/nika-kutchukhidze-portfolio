import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}) => {
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 300,
    fontSize: '0.72rem',
    letterSpacing: '0.25em',
    textTransform: 'uppercase' as const,
    padding: '0.85rem 2.2rem',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative' as const,
    overflow: 'hidden',
    whiteSpace: 'nowrap' as const,
  };

  const styles: Record<string, React.CSSProperties> = {
    primary: {
      ...base,
      background: 'linear-gradient(135deg, #D4A843 0%, #A67C2E 100%)',
      color: '#080808',
      border: 'none',
      boxShadow: '0 0 30px rgba(212,168,67,0.2)',
    },
    secondary: {
      ...base,
      background: 'transparent',
      color: '#D4A843',
      border: '1px solid rgba(212,168,67,0.35)',
    },
    outline: {
      ...base,
      background: 'transparent',
      color: '#888',
      border: '1px solid rgba(255,255,255,0.1)',
    },
  };

  return (
    <button
      style={styles[variant]}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        if (variant === 'primary') {
          el.style.boxShadow = '0 0 50px rgba(212,168,67,0.4)';
          el.style.transform = 'translateY(-1px)';
        } else if (variant === 'secondary') {
          el.style.background = 'rgba(212,168,67,0.08)';
          el.style.borderColor = 'rgba(212,168,67,0.6)';
        } else {
          el.style.borderColor = 'rgba(255,255,255,0.25)';
          el.style.color = '#bbb';
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        if (variant === 'primary') {
          el.style.boxShadow = '0 0 30px rgba(212,168,67,0.2)';
          el.style.transform = 'translateY(0)';
        } else if (variant === 'secondary') {
          el.style.background = 'transparent';
          el.style.borderColor = 'rgba(212,168,67,0.35)';
        } else {
          el.style.borderColor = 'rgba(255,255,255,0.1)';
          el.style.color = '#888';
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};