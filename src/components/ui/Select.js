import React from 'react';

const Select = ({ 
  label, 
  name,
  value, 
  onChange, 
  onBlur,
  options,
  error,
  required = false,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-text-light font-medium mb-2">
          {label} {required && <span className="text-accent-gold">*</span>}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onBlur={() => onBlur && onBlur(name)}
        className={`w-full px-4 py-3 bg-glass-white border rounded-xl text-text-light 
          focus:outline-none focus:border-accent-gold transition-colors duration-300 cursor-pointer
          ${error ? 'border-red-500' : 'border-glass-white'}`}
      >
        <option value="" className="bg-primary-dark">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-primary-dark">
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-400 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default Select;
