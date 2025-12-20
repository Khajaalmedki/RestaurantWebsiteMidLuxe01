import React from 'react';

const GlassCard = ({ 
  children, 
  blur = 'normal',
  hoverEffect = true,
  className = '',
  onClick,
}) => {
  const blurStyles = {
    light: 'glass-blur',
    normal: 'glass-blur',
    strong: 'glass-blur-strong',
  };
  
  const hoverStyles = hoverEffect ? 'hover-glow-gold cursor-pointer' : '';
  
  const classes = `${blurStyles[blur]} rounded-2xl p-6 ${hoverStyles} ${className}`;
  
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default GlassCard;
