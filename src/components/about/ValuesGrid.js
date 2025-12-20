import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ValueCard from './ValueCard';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { VALUES } from '@/data/teamData';

const ValuesGrid = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section className="section-padding bg-dark-900" ref={ref}>
      <div className="container-custom">
        <SectionHeading 
          subtitle="What We Stand For"
          title="Our Values"
        />
        
        <div 
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {VALUES.map((value, index) => (
            <div 
              key={value.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ValueCard value={value} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesGrid;
