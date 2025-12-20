import React from 'react';
import Link from 'next/link'

const Button = ({ 
  text, 
  variant = 'primary', 
  onClick, 
  to, 
  size = 'md',
  icon,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-smooth disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-accent-gold text-primary-dark hover:bg-gold-400 hover:shadow-glow-gold hover:scale-[1.02]',
    secondary: 'bg-transparent border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-primary-dark hover:scale-[1.02]',
    glass: 'glass-blur text-text-light border border-glass-white hover-glow-gold',
    outline: 'bg-transparent border border-text-light text-text-light hover:bg-text-light hover:text-primary-dark',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-6 py-3 text-base rounded-2xl',
    lg: 'px-8 py-4 text-lg rounded-2xl',
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </>
  );
  
  if (to) {
    return (
      <Link href={to} className={classes}>
        {content}
      </Link>
    );
  }
  
  return (
    <button 
      type={type}
      onClick={onClick} 
      className={classes}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
