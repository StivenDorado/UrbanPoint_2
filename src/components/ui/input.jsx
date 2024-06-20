// src/components/ui/input.jsx
import React from 'react';

const Input = ({ className, placeholder, ...rest }) => {
  return (
    <input
      className={`border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 ${className}`}
      placeholder={placeholder}
      {...rest}
    />
  );
}

export default Input;
