import React from 'react';

const Textarea = ({ 
  label, 
  name,
  value, 
  onChange, 
  onBlur,
  placeholder,
  error,
  required = false,
  rows = 4,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-text-light font-medium mb-2">
          {label} {required && <span className="text-accent-gold">*</span>}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur && onBlur(name)}
        placeholder={placeholder}
        rows={rows}
        suppressHydrationWarning
        className={`w-full px-4 py-3 bg-glass-white border rounded-xl text-text-light placeholder-gray-500 
          focus:outline-none focus:border-accent-gold transition-colors duration-300 resize-none
          ${error ? 'border-red-500' : 'border-glass-white'}`}
      />
      {error && (
        <p className="text-red-400 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default Textarea;
