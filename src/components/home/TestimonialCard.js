import React from 'react';
import { FiStar } from 'react-icons/fi';
import GlassCard from '../common/GlassCard';

const TestimonialCard = ({ testimonial }) => {
  return (
    <GlassCard hoverEffect={false} className="h-full">
      {/* Rating Stars */}
      <div className="flex space-x-1 mb-4">
        {[...Array(testimonial.rating)].map((_, index) => (
          <FiStar key={index} className="text-accent-gold fill-accent-gold" size={18} />
        ))}
      </div>
      
      {/* Testimonial Text */}
      <p className="text-gray-300 text-base leading-relaxed mb-6 italic">
        "{testimonial.testimonial}"
      </p>
      
      {/* Customer Info */}
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <img 
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://picsum.photos/100/100';
            }}
          />
        </div>
        <div>
          <p className="text-text-light font-medium">{testimonial.name}</p>
          <p className="text-gray-500 text-sm">{new Date(testimonial.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
        </div>
      </div>
    </GlassCard>
  );
};

export default TestimonialCard;
