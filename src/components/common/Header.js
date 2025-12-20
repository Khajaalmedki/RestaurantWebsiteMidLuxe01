"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from "next/navigation"
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import { NAV_ITEMS } from '@/utils/constants';
import { RESTAURANT_INFO } from '@/data/config';
import { useTheme } from '@/context/ThemeContext';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrolled } = useTheme();
  const pathname = usePathname();
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const isActive = (path) => pathname === path;
  
  return (
      
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-blur-strong shadow-lg py-4' : 'lg:bg-transparent bg-glass-blur py-6'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex-1 flex items-center space-x-2 group"
          >
            <div className="text-center">
              <h1 className="text-xl md:text-2xl font-heading text-accent-gold group-hover:text-gold-400 transition-colors duration-300">
                {RESTAURANT_INFO.name.toUpperCase()}
              </h1>
              <p className="text-xs font-accent text-text-light tracking-widest">
                LUXURY DINING
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`relative text-base font-medium transition-colors duration-300 group ${
                  isActive(item.path)
                    ? 'text-accent-gold'
                    : 'text-text-light hover:text-accent-gold'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all duration-300 group-hover:w-full ${
                    isActive(item.path) ? 'w-full' : ''
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Phone Number & CTA */}
          <div className="hidden lg:flex flex-1 justify-end items-center space-x-4">
            <a
              href={`tel:${RESTAURANT_INFO.contact.phone}`}
              className="flex items-center space-x-2 text-text-light hover:text-accent-gold transition-colors duration-300"
            >
              <FiPhone className="text-accent-gold" />
              <span className="text-sm font-medium">
                {RESTAURANT_INFO.contact.phone}
              </span>
            </a>
          </div>

          {/* Mobile Menu Button (unchanged) */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-text-light hover:text-accent-gold transition-colors duration-300 p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 glass-blur-strong z-50 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 border-t border-glass-white' : 'max-h-0'
          }`}
          style={{ backgroundColor: 'rgba(28, 28, 28,0.9)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="container-custom py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-lg font-medium transition-colors duration-300 ${
                  isActive(item.path) ? 'text-accent-gold' : 'text-text-light hover:text-accent-gold'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-glass-white">
              <a 
                href={`tel:${RESTAURANT_INFO.contact.phone}`}
                className="flex items-center space-x-2 text-text-light hover:text-accent-gold transition-colors duration-300 mb-4"
              >
                <FiPhone className="text-accent-gold" />
                <span className="text-sm font-medium">{RESTAURANT_INFO.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
