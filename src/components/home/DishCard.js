import React from 'react';
import GlassCard from '../common/GlassCard';

const DishCard = ({ dish }) => {
  return (
    <GlassCard className="overflow-hidden group">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden rounded-xl mb-4">
        <img 
          src={dish.image}
          alt={dish.name}
          className="relative z-20 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'https://picsum.photos/400/300';
          }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary-dark bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
      </div>
      
      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-xl font-heading text-text-light group-hover:text-accent-gold transition-colors duration-300">
          {dish.name}
        </h3>
        <p className="text-2xl font-bold text-accent-gold">
          {dish.price}
        </p>
      </div>
    </GlassCard>
  );
};

export default DishCard;
