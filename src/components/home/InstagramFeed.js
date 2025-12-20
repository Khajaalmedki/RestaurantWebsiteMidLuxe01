import React from 'react';
import { FiInstagram, FiHeart } from 'react-icons/fi';
import SectionHeading from '../common/SectionHeading';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { INSTAGRAM_POSTS } from '@/data/dishes';
import { RESTAURANT_INFO } from '@/data/config';

const InstagramFeed = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section className="section-padding bg-gradient-to-b from-primary-dark via-dark-800 to-primary-dark relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-10 w-72 h-72 bg-accent-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-accent-bronze rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <SectionHeading 
          subtitle="Follow Us"
          title="@arabianmandihouse"
        />
        
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {INSTAGRAM_POSTS.map((post, index) => (
            <a
              key={post.id}
              href={`https://instagram.com/${RESTAURANT_INFO.socialMedia.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden animate-fade-in shadow-lg border border-glass-white hover:border-accent-gold transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img 
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transform group-hover:scale-110 group-hover:opacity-50 opacity-100 transition-all duration-500"
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://picsum.photos/400/400';
                }}
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/40 to-primary-dark/20 group-hover:from-primary-dark/90 group-hover:to-primary-dark/70 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center transform group-hover:scale-100 scale-95">
                  <FiInstagram className="text-accent-gold mx-auto mb-2 group-hover:text-gold-400 transition-colors duration-300" size={36} />
                  <div className="flex items-center justify-center space-x-2 text-text-light">
                    <FiHeart size={18} className="group-hover:text-accent-gold transition-colors" />
                    <span className="text-sm font-medium">{post.likes.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center">
          <a
            href={`https://instagram.com/${RESTAURANT_INFO.socialMedia.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center space-x-2 text-accent-gold hover:text-gold-400 hover:shadow-glow-gold px-6 py-3 rounded-xl transition-all duration-300 font-medium border border-transparent hover:border-accent-gold ${
              hasIntersected ? 'opacity-100' : 'opacity-50'
            }`}
          >
            <FiInstagram size={22} />
            <span>Follow us on Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
