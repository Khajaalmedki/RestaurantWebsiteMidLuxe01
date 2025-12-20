"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FiInstagram, FiFacebook, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { SiTripadvisor } from 'react-icons/si';
import { RESTAURANT_INFO } from '../../data/config';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 border-t border-glass-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading text-accent-gold">
              Arabian Mandi
            </h3>
            <p className="text-sm font-accent text-text-light tracking-widest">
              LUXURY DINING
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Experience authentic Arabian Mandi in a luxurious setting. Where tradition meets elegance.
            </p>
            {/* Certifications */}
            <div className="flex flex-wrap gap-2 pt-4">
              {RESTAURANT_INFO.certifications.map((cert, index) => (
                <span key={index} className="text-xs bg-glass-white px-3 py-1 rounded-full text-accent-gold border border-accent-gold/30">
                  {cert}
                </span>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading text-text-light">Quick Links</h4>
            <ul className="space-y-2">
              {['Sustainability', 'Our Quality', 'Hygiene Standards'].map((link) => (
                <li key={link}>
                  <Link 
                    href={`/${link.toLowerCase().replace(/ /g, '-')}`}
                    className="text-sm text-gray-400 hover:text-accent-gold transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-px bg-accent-gold group-hover:w-4 transition-all duration-300 mr-2"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading text-text-light">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <FiMapPin className="text-accent-gold mt-1 flex-shrink-0" />
                <span>
                  {RESTAURANT_INFO.contact.address.street}, {RESTAURANT_INFO.contact.address.area}, {RESTAURANT_INFO.contact.address.city}
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FiPhone className="text-accent-gold flex-shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.contact.phone}`} className="text-gray-400 hover:text-accent-gold transition-colors duration-300">
                  {RESTAURANT_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <FiMail className="text-accent-gold flex-shrink-0" />
                <a href={`mailto:${RESTAURANT_INFO.contact.email}`} className="text-gray-400 hover:text-accent-gold transition-colors duration-300">
                  {RESTAURANT_INFO.contact.email}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading text-text-light">Stay Updated</h4>
            <p className="text-sm text-gray-400">Subscribe to our newsletter for exclusive offers and updates.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full px-4 py-2 bg-glass-white border border-glass-white rounded-xl text-text-light placeholder-gray-500 focus:outline-none focus:border-accent-gold transition-colors duration-300"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-accent-gold text-primary-dark rounded-xl font-medium hover:bg-gold-400 transition-colors duration-300"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-glass-white">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a 
                href={`https://instagram.com/${RESTAURANT_INFO.socialMedia.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a 
                href={`https://facebook.com/${RESTAURANT_INFO.socialMedia.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              <a 
                href={`https://tripadvisor.com/${RESTAURANT_INFO.socialMedia.tripadvisor}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-gold transition-colors duration-300"
                aria-label="TripAdvisor"
              >
                <SiTripadvisor size={20} />
              </a>
            </div>
            
            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400">We Accept:</span>
              <div className="flex space-x-2">
                {['Visa', 'Mastercard', 'UPI'].map((method) => (
                  <span key={method} className="text-xs bg-glass-white px-2 py-1 rounded text-gray-400">
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-glass-white">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-sm text-gray-400">
            <p>© {currentYear} Arabian Mandi House. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/terms" className="hover:text-accent-gold transition-colors duration-300">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-accent-gold transition-colors duration-300">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
