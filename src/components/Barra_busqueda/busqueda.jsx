// src/components/SearchBar.jsx
import React from 'react';
import Button from '../ui/button'; // Ajusta la ruta según la estructura de tu proyecto
import Input from '../ui/input'; // Ajusta la ruta según la estructura de tu proyecto

const SearchBar = () => {
  return (
    <div className="w-full max-w-4xl p-4 bg-gray-200 rounded-lg flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Button variant="outline">
          <span className="flex items-center">
            Fecha de Entrada
          </span>
        </Button>
        <Input placeholder="¿En qué barrio quieres vivir?" className="flex-1" />
      </div>
      <Button variant="outline">
        <span className="flex items-center">
          Filtros
        </span>
        </Button>
    </div>
  );
}

export default SearchBar;
