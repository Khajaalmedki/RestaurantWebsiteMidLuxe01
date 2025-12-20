import React from 'react';
import SectionHeading from '../common/SectionHeading';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { TEAM_MEMBERS } from '@/data/teamData';

const TeamGrid = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section className="section-padding bg-primary-dark" ref={ref}>
      <div className="container-custom">
        <SectionHeading 
          subtitle="The Faces Behind Excellence"
          title="Meet Our Team"
        />
        
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {TEAM_MEMBERS.map((member, index) => (
            <div 
              key={member.id}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-blur rounded-2xl p-6 hover-glow-gold h-full">
                {/* Image */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'https://picsum.photos/400/400';
                    }}
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-heading text-text-light mb-2">
                  {member.name}
                </h3>
                <p className="text-accent-gold text-sm font-accent mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
