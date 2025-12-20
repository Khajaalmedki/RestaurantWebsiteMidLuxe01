"use client"

import React, { useState, useEffect } from 'react';
import { MENU_CATEGORIES } from '@/data/menuData';

const MenuNavigation = ({ activeCategory, setActiveCategory }) => {
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if navigation should be sticky (after hero section)
      setIsSticky(window.scrollY > 300);
      
      // Update active category based on scroll position
      const sections = MENU_CATEGORIES.map(cat => ({
        id: cat.id,
        element: document.getElementById(cat.id),
      }));
      
      const current = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      
      if (current && current.id !== activeCategory) {
        setActiveCategory(current.id);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeCategory, setActiveCategory]);
  
  const scrollToCategory = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 120; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      
      setActiveCategory(categoryId);
    }
  };
  
  return (
    <nav 
      className={`transition-all duration-300 z-30 ${
        isSticky 
          ? 'fixed top-20 left-0 right-0 glass-blur-strong shadow-lg' 
          : 'relative bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-start md:justify-center space-x-2 py-4 overflow-x-auto">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => scrollToCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-accent-gold text-primary-dark shadow-glow-gold'
                  : 'glass-blur text-text-light hover:bg-glass-white hover:text-accent-gold'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default MenuNavigation;
