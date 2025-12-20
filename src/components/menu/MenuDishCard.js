import React from 'react';
import GlassCard from '../common/GlassCard';
import DietaryIcons from './DietaryIcons';
import BeveragePairing from './BeveragePairing';

const MenuDishCard = ({ dish }) => {
  return (
    <GlassCard className="group h-full flex flex-col">
      {/* Image */}
      <div className="relative h-64 rounded-xl overflow-hidden mb-4 flex-shrink-0">
        <img 
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.target.src = 'https://picsum.photos/600/400';
          }}
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary-dark bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 glass-blur-strong px-4 py-2 rounded-full">
          <span className="text-accent-gold font-bold text-lg">{dish.price}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-grow flex flex-col">
        {/* Header with Name and Dietary Icons */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-heading text-text-light group-hover:text-accent-gold transition-colors duration-300 flex-grow pr-2">
            {dish.name}
          </h3>
          <DietaryIcons dietary={dish.dietary} />
        </div>
        
        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
          {dish.description}
        </p>
        
        {/* Beverage Pairing */}
        <BeveragePairing pairing={dish.beveragePairing} />
      </div>
    </GlassCard>
  );
};

export default MenuDishCard;
