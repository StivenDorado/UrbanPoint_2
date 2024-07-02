import React from 'react';

const Button = ({ variant, children, ...rest }) => {
  // Determina las clases CSS según la variante del botón
  let buttonClass = 'px-4 py-2 rounded-md border';
  if (variant === 'outline') {
    buttonClass += ' border-gray-500 text-gray-500 hover:bg-gray-100';
  } else {
    buttonClass += ' bg-blue-500 text-white hover:bg-blue-600';
  }

  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
}

export default Button;
