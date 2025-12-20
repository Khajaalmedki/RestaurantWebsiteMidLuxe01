"use client"

import React, { useEffect } from 'react';
import { FiCheckCircle, FiXCircle, FiInfo, FiX } from 'react-icons/fi';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);
  
  const icons = {
    success: <FiCheckCircle size={24} />,
    error: <FiXCircle size={24} />,
    info: <FiInfo size={24} />,
  };
  
  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  };
  
  return (
    <div className="fixed top-24 right-6 z-50 animate-slide-in">
      <div className={`${colors[type]} text-white px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3 min-w-[300px]`}>
        {icons[type]}
        <p className="flex-grow font-medium">{message}</p>
        <button 
          onClick={onClose}
          className="hover:opacity-80 transition-opacity"
          aria-label="Close notification"
        >
          <FiX size={20} />
        </button>
      </div>
    </div>
  );
};

export default Toast;
