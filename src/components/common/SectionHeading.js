import React from 'react';

const SectionHeading = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  return (
    <div className={`mb-12 ${alignmentClasses[alignment]} ${className}`}>
      {subtitle && (
        <p className="text-accent-gold font-accent text-sm tracking-widest uppercase mb-3 animate-fade-in">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-text-light animate-slide-in">
        {title}
      </h2>
      <div className="w-24 h-1 bg-accent-gold mx-auto mt-6 animate-scale-in" style={{ marginLeft: alignment === 'left' ? '0' : alignment === 'right' ? 'auto' : 'auto', marginRight: alignment === 'left' ? 'auto' : alignment === 'right' ? '0' : 'auto' }}></div>
    </div>
  );
};

export default SectionHeading;
