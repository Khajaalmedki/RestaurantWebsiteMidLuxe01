import React from 'react';
import MenuDishCard from './MenuDishCard';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const MenuCategory = ({ category, dishes }) => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });
  
  return (
    <section 
      id={category.id}
      className="py-16 scroll-mt-32"
      ref={ref}
    >
      {/* Category Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-heading text-text-light mb-3">
          {category.name}
        </h2>
        <p className="text-gray-400 text-lg font-accent tracking-wide">
          {category.description}
        </p>
        <div className="w-24 h-1 bg-accent-gold mx-auto mt-4"></div>
      </div>
      
      {/* Dishes Grid */}
      <div 
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
          hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {dishes.map((dish, index) => (
          <div 
            key={dish.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <MenuDishCard dish={dish} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuCategory;
