import React from 'react';
import SectionHeading from '../common/SectionHeading';
import DishCard from './DishCard';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { BEST_SELLING_DISHES } from '@/data/dishes';

const BestSellingDishes = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section className="section-padding bg-primary-dark" ref={ref}>
      <div className="container-custom">
        <SectionHeading 
          subtitle="Signature Dishes"
          title="Our Best Sellers"
        />
        
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {BEST_SELLING_DISHES.map((dish, index) => (
            <div 
              key={dish.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DishCard dish={dish} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingDishes;
