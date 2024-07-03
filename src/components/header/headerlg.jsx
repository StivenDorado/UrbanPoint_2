// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="bg-gray-200 p-4 flex justify-between items-center w-full">
      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8"> {/* Ajuste para centrar y limitar el ancho */}
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-gray-800 font-bold text-xl">Logo UrbanPoint</Link>
          <div className="flex space-x-4">
            <Link to="/iniciosesion">
              <button variant="outline">Inicia sesión</button>
            </Link>
            <Link to="/registro">
              <button variant="outline">Regístrate</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
