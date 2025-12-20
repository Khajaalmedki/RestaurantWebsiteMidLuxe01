import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiFacebook } from 'react-icons/fi';
import { SiTripadvisor } from 'react-icons/si';
import GlassCard from '../common/GlassCard';
import { RESTAURANT_INFO } from '@/data/config';

const ContactInfoCards = () => {
  const contactInfo = [
    {
      icon: <FiMapPin size={24} />,
      title: 'Address',
      content: (
        <>
          {RESTAURANT_INFO.contact.address.street}<br />
          {RESTAURANT_INFO.contact.address.area}<br />
          {RESTAURANT_INFO.contact.address.city}, {RESTAURANT_INFO.contact.address.state} {RESTAURANT_INFO.contact.address.pincode}
        </>
      ),
    },
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      content: (
        <a 
          href={`tel:${RESTAURANT_INFO.contact.phone}`}
          className="hover:text-accent-gold transition-colors duration-300"
        >
          {RESTAURANT_INFO.contact.phone}
        </a>
      ),
    },
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      content: (
        <a 
          href={`mailto:${RESTAURANT_INFO.contact.email}`}
          className="hover:text-accent-gold transition-colors duration-300"
        >
          {RESTAURANT_INFO.contact.email}
        </a>
      ),
    },
    {
      icon: <FiClock size={24} />,
      title: 'Working Hours',
      content: (
        <>
          Mon - Fri: {RESTAURANT_INFO.workingHours.weekdays.open} - {RESTAURANT_INFO.workingHours.weekdays.close}<br />
          Sat - Sun: {RESTAURANT_INFO.workingHours.weekends.open} - {RESTAURANT_INFO.workingHours.weekends.close}
        </>
      ),
    },
  ];
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInfo.map((info, index) => (
          <GlassCard key={index} className="flex items-start space-x-4 ">
            <div className="text-accent-gold flex-shrink-0">
              {info.icon}
            </div>
            <div>
              <h3 className="text-text-light font-heading text-lg mb-2">
                {info.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed ">
                {info.content}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
      
      {/* Social Media */}
      <GlassCard>
        <h3 className="text-text-light font-heading text-lg mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a
            href={`https://instagram.com/${RESTAURANT_INFO.socialMedia.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass-blur flex items-center justify-center text-gray-400 hover:text-accent-gold hover:bg-glass-white transition-all duration-300"
          >
            <FiInstagram size={20} />
          </a>
          <a
            href={`https://facebook.com/${RESTAURANT_INFO.socialMedia.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass-blur flex items-center justify-center text-gray-400 hover:text-accent-gold hover:bg-glass-white transition-all duration-300"
          >
            <FiFacebook size={20} />
          </a>
          <a
            href={`https://tripadvisor.com/${RESTAURANT_INFO.socialMedia.tripadvisor}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass-blur flex items-center justify-center text-gray-400 hover:text-accent-gold hover:bg-glass-white transition-all duration-300"
          >
            <SiTripadvisor size={20} />
          </a>
        </div>
      </GlassCard>
    </div>
  );
};

export default ContactInfoCards;
