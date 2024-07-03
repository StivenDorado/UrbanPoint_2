import React from 'react';


const SearchBar = () => {
  return (
    <div className="w-full p-4 bg-gray-200 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-full shadow-md flex items-center p-2 space-x-2">
        {/* Botón "Fecha de Entrada" */}
        <button variant="outline" className="text-black flex-shrink-0 px-4 py-2 rounded-full border-0 bg-transparent hover:bg-gray-100">
          Fecha de Entrada
        </button>

        {/* Separador */}
        <div className="border-l border-gray-300 h-6 mx-2"></div>

        {/* Campo de entrada */}
        <input
          placeholder="¿En qué barrio quieres vivir?"
          className="text-black flex-1 bg-transparent border-0 focus:outline-none p-2 text-center"
        />

        {/* Separador */}
        <div className="border-l border-gray-300 h-6 mx-2"></div>

        {/* Botón "Filtros" */}
        <button variant="outline" className="text-black flex-shrink-0 px-4 py-2 rounded-full border-0 bg-transparent hover:bg-gray-100">
          Filtros
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
