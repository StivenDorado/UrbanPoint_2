// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/button'; // Ajusta la ruta según la estructura de tu proyecto
import SearchBar from '../Barra_busqueda/busqueda';

const Header = () => {
  return (
    <header className="bg-gray-200 p-4 flex justify-between items-center w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Ajuste para centrar y limitar el ancho */}
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-gray-800 font-bold text-xl">Logo UrbanPoint</Link>
          <div className="flex space-x-4">
            <Link to="/iniciosesion">
              <Button variant="outline">Inicia sesión</Button>
            </Link>
            <Link to="/registro">
              <Button variant="outline">Regístrate</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
