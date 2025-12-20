import React from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const ChefStory = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.3 });
  
  return (
    <section className="section-padding bg-dark-900" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            className={`relative transition-all duration-700 ${
              hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                alt="Executive Chef"
                className="w-full h-full object-cover"
              />
              {/* Decorative Border */}
              <div className="absolute inset-0 border-4 border-accent-gold opacity-20 rounded-2xl m-4"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 glass-blur-strong px-6 py-4 rounded-2xl">
              <p className="text-accent-gold font-accent text-sm">Master Chef</p>
              <p className="text-text-light font-heading text-xl">20+ Years</p>
            </div>
          </div>
          
          {/* Content */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <span className="text-accent-gold font-accent text-sm tracking-widest uppercase mb-4 inline-block">
              Our Heritage
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-text-light mb-6">
              Culinary Excellence
            </h2>
            <div className="w-24 h-1 bg-accent-gold mb-8"></div>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Our Executive Chef brings over two decades of experience mastering the art of traditional Arabian cuisine. 
              Trained in the heart of Saudi Arabia, he ensures every dish honors centuries-old recipes while embracing 
              modern culinary innovation.
            </p>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We source the finest ingredients, from premium basmati rice to hand-selected spices, creating an authentic 
              experience that transports you to the Arabian Peninsula with every bite.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-accent-gold flex items-center justify-center">
                  <span className="text-primary-dark font-bold text-xl">✓</span>
                </div>
                <span className="text-text-light font-medium">Authentic Recipes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-accent-gold flex items-center justify-center">
                  <span className="text-primary-dark font-bold text-xl">✓</span>
                </div>
                <span className="text-text-light font-medium">Premium Ingredients</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-accent-gold flex items-center justify-center">
                  <span className="text-primary-dark font-bold text-xl">✓</span>
                </div>
                <span className="text-text-light font-medium">Halal Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefStory;
