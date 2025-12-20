import React from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const StorySection = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.3 });
  
  return (
    <section className="section-padding bg-primary-dark" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            className={`relative transition-all duration-700 ${
              hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-accent-gold opacity-20 rounded-2xl m-6"></div>
            </div>
          </div>
          
          {/* Content */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <span className="text-accent-gold font-accent text-sm tracking-widest uppercase mb-4 inline-block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-text-light mb-6">
              Our Heritage
            </h2>
            <div className="w-24 h-1 bg-accent-gold mb-8"></div>
            
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Arabian Mandi House was born from a passion for authentic Arabian cuisine and a desire to bring 
                the rich culinary traditions of the Middle East to India. Our journey began in 2020 when our 
                founder, inspired by years of traveling through Saudi Arabia and Yemen, decided to create a 
                dining experience that would transport guests to the heart of Arabian hospitality.
              </p>
              
              <p>
                Every dish we serve tells a story of tradition, craftsmanship, and love. Our Executive Chef, 
                with over two decades of experience, has perfected the art of slow-cooking mandi in traditional 
                underground ovens, ensuring each grain of rice and piece of meat is infused with aromatic spices 
                and tender perfection.
              </p>
              
              <p>
                We believe in honoring the past while embracing the present. Our restaurant combines traditional 
                Arabic architectural elements with modern luxury, creating an ambiance that is both elegant and 
                inviting. From the moment you step through our doors, you become part of our extended family, 
                experiencing the warmth and generosity that defines Arabian culture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
