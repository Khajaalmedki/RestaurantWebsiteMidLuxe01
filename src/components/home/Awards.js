import React from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { AWARDS } from '@/data/testimonials';

const Awards = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.3 });
  
  // Only render if there are awards
  if (!AWARDS || AWARDS.length === 0) return null;
  
  return (
    <section className="section-padding bg-dark-900" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-accent-gold font-accent text-sm tracking-widest uppercase">
            Recognition
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-text-light mt-3">
            Awards & Accolades
          </h2>
        </div>
        
        <div 
          className={`flex flex-wrap justify-center items-center gap-8 md:gap-12 transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {AWARDS.map((award, index) => (
            <div 
              key={award.id}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-32 h-32 mx-auto mb-4 glass-blur rounded-full flex items-center justify-center group-hover:shadow-glow-gold transition-all duration-300">
                <img 
                  src={award.logo}
                  alt={award.title}
                  className="w-20 h-20 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    e.target.src = 'https://picsum.photos/100/100';
                  }}
                />
              </div>
              <p className="text-text-light font-medium text-sm mb-1">{award.title}</p>
              <p className="text-accent-gold text-xs font-accent">{award.year} • {award.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
