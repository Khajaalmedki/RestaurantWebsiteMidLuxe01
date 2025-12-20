import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-dark">
      <div className="text-center animate-fade-in">
        {/* Logo */}
        <div className="mb-6">
          <h1 className="text-5xl font-heading text-accent-gold text-glow-gold">
            Arabian Mandi
          </h1>
          <p className="text-sm font-accent text-text-light mt-2 tracking-widest">
            LUXURY DINING
          </p>
        </div>
        
        {/* Loading animation */}
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-accent-gold rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-accent-gold rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-accent-gold rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
