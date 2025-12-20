import React from 'react';
import { DIETARY_INFO } from '@/data/menuData';

const DietaryIcons = ({ dietary }) => {
  if (!dietary || dietary.length === 0) return null;
  
  return (
    <div className="flex items-center space-x-2">
      {dietary.map((type) => {
        const info = DIETARY_INFO[type];
        if (!info) return null;
        
        return (
          <div
            key={type}
            className="group relative"
          >
            <span 
              className={`text-lg ${info.color}`}
              role="img"
              aria-label={info.label}
            >
              {info.icon}
            </span>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-primary-dark text-text-light text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {info.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DietaryIcons;
