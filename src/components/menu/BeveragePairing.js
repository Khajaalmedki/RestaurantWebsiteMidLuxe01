import React from 'react';
import { FiDroplet } from 'react-icons/fi';

const BeveragePairing = ({ pairing }) => {
  if (!pairing) return null;
  
  return (
    <div className="mt-4 pt-4 border-t border-glass-white">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 rounded-full bg-accent-gold bg-opacity-20 flex items-center justify-center flex-shrink-0">
          <FiDroplet className="text-accent-gold" size={16} />
        </div>
        <div>
          <p className="text-accent-gold text-sm font-medium mb-1">
            Pairs well with: {pairing.name}
          </p>
          <p className="text-gray-400 text-xs">
            {pairing.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeveragePairing;
