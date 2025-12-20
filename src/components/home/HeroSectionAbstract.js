import React from 'react';
import Button from '../common/Button';

const HeroSectionAbstract = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-dark-800 to-dark-900">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-bronze/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold/3 rounded-full blur-3xl"></div>
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d4af37" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Decorative Arabic Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23d4af37' fill-opacity='0.4'/%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Decorative Top Line */}
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent-gold"></div>
          <div className="mx-4">
            <span className="text-sm font-accent tracking-[0.3em] text-accent-gold uppercase">
              Authentic Arabian Cuisine
            </span>
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent-gold"></div>
        </div>
        
        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading text-text-light mb-4 leading-tight animate-slide-in">
          Taste the Luxury
        </h1>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading text-accent-gold mb-8 leading-tight animate-slide-in text-glow-gold" style={{ animationDelay: '0.1s' }}>
          of Arabian Mandi
        </h1>
        
        {/* Decorative Bottom Line */}
        <div className="flex items-center justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="h-1 w-24 bg-accent-gold rounded-full"></div>
        </div>
        
        {/* CTA Button */}
        <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            text="Reserve Your Table"
            variant="primary"
            size="lg"
            to="/bookings"
          />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-gold rounded-full flex items-start justify-center p-2 glass-blur">
          <div className="w-1 h-3 bg-accent-gold rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionAbstract;
