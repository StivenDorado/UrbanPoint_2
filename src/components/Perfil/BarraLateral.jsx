import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Componente de barra lateral
const BarraLateral = () => {
    // Estado para almacenar la ruta de la imagen de perfil
    // Inicializa con la imagen almacenada en localStorage o una imagen por defecto ('/user.png')
    const [imageSrc, setImageSrc] = useState(localStorage.getItem('profileImage') || '/user.png');

    // useEffect para guardar la ruta de la imagen en localStorage cada vez que imageSrc cambie
    useEffect(() => {
        localStorage.setItem('profileImage', imageSrc);
    }, [imageSrc]);

    // Función para manejar el cambio de imagen de perfil
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            // Cuando la lectura del archivo termine, actualiza imageSrc con el resultado
            reader.onloadend = () => {
                setImageSrc(reader.result);
            };
            // Lee el archivo seleccionado como una URL en base64
            reader.readAsDataURL(file);
        }
    };

    return (
        // Elemento de navegación que actúa como barra lateral
        <nav className="bg-gray-500 h-screen p-4 text-white w-64 fixed top-0 left-0 z-10 mt-16">
            <div className="flex flex-col items-center mt-8">
                <div className="relative">
                    {/* Imagen de perfil */}
                    <img
                        src={imageSrc}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full"
                    />
                    {/* Etiqueta para input de archivo con un ícono */}
                    <label htmlFor="fileInput" className="absolute bottom-0 right-0 bg-gray-700 rounded-full p-1 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 16l7-7 7 7" />
                        </svg>
                    </label>
                    {/* Input de archivo oculto para seleccionar una nueva imagen */}
                    <input
                        id="fileInput"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                </div>
                {/* Nombre del usuario */}
                <h2 className="mt-4 text-xl font-bold">Muriel Esneider</h2>
            </div>
            <ul className="space-y-4 mt-8">
                <li>
                    {/* Enlace al perfil del usuario */}
                    <Link to="/" className="text-white hover:text-gray-300">Perfil</Link>
                </li>
                <li>
                    <Link to="/lista-Favoritos" className='text-white hover:text-gray-300'>Lista de Favoritos</Link>
                </li>
                <li>
                    <Link to="/solicitudes-citas" className='text-white hover:text-gray-300'>Solicitudes de Citas</Link>
                </li>
                <li>
                    <Link to="/solicitudes-reservas" className='text-white hover:text-gray-300'>Solicitudes reservas</Link>
                </li>
                <li>
                    <Link to="/ofertas-precio" className='text-white hover:text-gray-300'>Oferta de Precios</Link>
                </li>
                <li>
                    <Link to="/mensajes" className='text-white hover:text-gray-300'>Mensajes</Link>
                </li>
                <li>
                    <Link to="/verificar-cuenta" className='text-white hover:text-gray-300'>Verificar Cuenta</Link>
                </li>
                <li>
                    <Link to="/publicacion" className='text-white hover:text-gray-300'>Has una Publicacion</Link>
                </li>
                <li>
                    <Link to="/programa-publicacion" className='text-white hover:text-gray-300'>Programa tu Publicacion</Link>
                </li>
                <li>
                    <Link to="/cerrar-sesion" className='text-white hover:text-gray-300'>cerrar sesion</Link>
                </li>
                {/* Puedes agregar más enlaces aquí según sea necesario */}
            </ul>
        </nav>
    );
};

export default BarraLateral;
