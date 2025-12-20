import React from 'react';
import Button from '../common/Button';
import useParallax from '@/hooks/useParallax';

const HeroSection = () => {
  const parallaxOffset = useParallax(0.3);
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80)',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        {/* Enhanced Gradient Overlay - Much Darker */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Animated Badge with Glass Background */}
        <div className="inline-block mb-6 animate-fade-in">
          <div className="glass-blur-strong px-5 py-2 rounded-full border border-accent-gold/30">
            <span className="text-sm font-accent tracking-widest text-accent-gold uppercase font-medium">
              Authentic Arabian Cuisine
            </span>
          </div>
        </div>
        
        {/* Main Heading with Text Shadow for Better Readability */}
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-heading text-text-light mb-6 leading-tight animate-slide-in"
          style={{
            textShadow: '0 4px 20px rgba(0, 0, 0, 0.9), 0 8px 40px rgba(0, 0, 0, 0.7)'
          }}
        >
          Taste the Luxury of <span className="block text-accent-gold text-glow-gold">Arabian Mandi</span>
        </h1>
        
        {/* CTA Button */}
        <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
          <Button 
            text="Browse Menu"
            variant="outline"
            size="md"
            to="/menu"
          />
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent-gold rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
