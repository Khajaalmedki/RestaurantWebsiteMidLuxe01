import React from 'react';
import GlassCard from '../common/GlassCard';

const ValueCard = ({ value }) => {
  return (
    <GlassCard hoverEffect={true} className="text-center h-full">
      <div className="text-5xl mb-4">{value.icon}</div>
      <h3 className="text-2xl font-heading text-text-light mb-4">
        {value.title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {value.description}
      </p>
    </GlassCard>
  );
};

export default ValueCard;
