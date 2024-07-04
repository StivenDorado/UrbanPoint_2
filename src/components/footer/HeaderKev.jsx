import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const userProfilePicture = 'https://example.com/profile-picture.jpg'; // Reemplaza con la URL de la foto de perfil del usuario

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-100 p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Logo UrbanPoint</div>
      <div className="flex-grow text-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Hola, Muriel. ¿Cómo podemos ayudarte?</h1>
          <div className="mb-6 mx-auto" style={{ maxWidth: '300px' }}>
            <input type="text" placeholder="Buscar ayuda y más..." className="border rounded-lg p-2 w-full" />
          </div>
        </div>
      </div>
      <div className="relative">
        <button
          className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
          onClick={toggleDropdown}
        >
          <img
            src={userProfilePicture}
            alt="Foto de perfil"
            className="w-8 h-8 rounded-full"
          />
          <i className={`fas ${isDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <div className="flex items-center p-4">
              <img
                src={userProfilePicture}
                alt="Foto de perfil"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h4 className="font-bold">Muriel</h4>
                <p className="text-gray-500">muriel@gmail.com</p>
              </div>
            </div>
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Perfil
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Configuración
            </Link>
            <Link
              to="/logout"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Cerrar sesión
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;