import React from 'react';
import { RESTAURANT_INFO } from '@/data/config';

const MapEmbed = ({ height = '500px' }) => {
  return (
    <div className="glass-blur rounded-2xl overflow-hidden" style={{ height }}>
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
  );
};

export default MapEmbed;
