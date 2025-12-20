import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { MENU_PREVIEW_DISHES } from '@/data/dishes';

const MenuPreview = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section className="section-padding bg-primary-dark" ref={ref}>
      <div className="container-custom">
        <SectionHeading 
          subtitle="Explore"
          title="From Our Menu"
        />
        
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {MENU_PREVIEW_DISHES.map((dish, index) => (
            <div 
              key={dish.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <img 
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://picsum.photos/400/300';
                  }}
                />
                <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 glass-blur px-3 py-1 rounded-full">
                  <span className="text-accent-gold text-sm font-medium">{dish.category}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-heading text-text-light group-hover:text-accent-gold transition-colors duration-300">
                  {dish.name}
                </h3>
                <span className="text-xl font-bold text-accent-gold">
                  {dish.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            text="View Full Menu"
            variant="glass"
            size="lg"
            to="/menu"
          />
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
