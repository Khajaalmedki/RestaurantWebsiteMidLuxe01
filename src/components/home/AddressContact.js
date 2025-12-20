import React from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import Button from '../common/Button';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { RESTAURANT_INFO } from '@/data/config';

const AddressContact = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section className="section-padding bg-primary-dark" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div 
            className={`transition-all duration-700 ${
              hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="h-[500px] rounded-2xl overflow-hidden glass-blur">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8!2d${RESTAURANT_INFO.mapCoordinates.lng}!3d${RESTAURANT_INFO.mapCoordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Details */}
          <div 
            className={`transition-all duration-700 delay-200 ${
              hasIntersected ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <span className="text-accent-gold font-accent text-sm tracking-widest uppercase mb-4 inline-block">
              Visit Us
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-text-light mb-6">
              Find Us Here
            </h2>
            <div className="w-24 h-1 bg-accent-gold mb-8"></div>
            
            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {/* Address */}
              <div className="flex items-start space-x-4 p-4 glass-blur rounded-xl hover-glow-gold">
                <FiMapPin className="text-accent-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-text-light font-medium mb-1">Address</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {RESTAURANT_INFO.contact.address.street}<br />
                    {RESTAURANT_INFO.contact.address.area}, {RESTAURANT_INFO.contact.address.city}<br />
                    {RESTAURANT_INFO.contact.address.state} {RESTAURANT_INFO.contact.address.pincode}
                  </p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start space-x-4 p-4 glass-blur rounded-xl hover-glow-gold">
                <FiPhone className="text-accent-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-text-light font-medium mb-1">Phone</p>
                  <a 
                    href={`tel:${RESTAURANT_INFO.contact.phone}`}
                    className="text-gray-400 text-sm hover:text-accent-gold transition-colors duration-300"
                  >
                    {RESTAURANT_INFO.contact.phone}
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start space-x-4 p-4 glass-blur rounded-xl hover-glow-gold">
                <FiMail className="text-accent-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-text-light font-medium mb-1">Email</p>
                  <a 
                    href={`mailto:${RESTAURANT_INFO.contact.email}`}
                    className="text-gray-400 text-sm hover:text-accent-gold transition-colors duration-300"
                  >
                    {RESTAURANT_INFO.contact.email}
                  </a>
                </div>
              </div>
              
              {/* Working Hours */}
              <div className="flex items-start space-x-4 p-4 glass-blur rounded-xl hover-glow-gold">
                <FiClock className="text-accent-gold flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-text-light font-medium mb-1">Working Hours</p>
                  <p className="text-gray-400 text-sm">
                    Mon - Fri: {RESTAURANT_INFO.workingHours.weekdays.open} - {RESTAURANT_INFO.workingHours.weekdays.close}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Sat - Sun: {RESTAURANT_INFO.workingHours.weekends.open} - {RESTAURANT_INFO.workingHours.weekends.close}
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                text="Reserve Now"
                variant="primary"
                size="lg"
                to="/bookings"
              />
              <Button 
                text="Get Directions"
                variant="secondary"
                size="lg"
                onClick={() => window.open(`https://www.google.com/maps/dir//${RESTAURANT_INFO.mapCoordinates.lat},${RESTAURANT_INFO.mapCoordinates.lng}`, '_blank')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddressContact;
