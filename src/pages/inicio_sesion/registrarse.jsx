import React from 'react';
import { Link } from 'react-router-dom';

function Registrarse() {
  return (
    <div className="flex flex-col items-center h-screen ">
      <div className="space-y-3">
        <h2 className="text-3xl text-center font-bold text-black">Registro</h2>
        
        {/* Caja de imágenes */}
        <div className="flex gap-3 items-center justify-center">
          <img src="/BxBxlGmail.svg" width="50" alt="Gmail" className="mx-auto" />
          <img src="/MdiFacebook.svg" width="45" alt="Facebook" className="mx-auto" />
          <img src="/LogosApple.svg" width="33" alt="Apple" className="mx-auto" />
        </div>
        <p className='text-black'>Ingrese su Región y Número de teléfono </p>
        
        {/* Formulario de información */}
        <form className="rounded-md min-w-full space-y-5">
          {/* Selecciona país */}
          <div className="relative w-full">
            <label htmlFor="country" className="sr-only">Country</label>
            <select id="country" className="w-full pl-10 h-10 rounded-md border border-gray-300 focus:ring focus:ring-blue-500" defaultValue="+57">
              <option value="+57" disabled>Colombia (+57)</option>
              <option value="+507">Panama (+507)</option>
              <option value="+52">Mexico (+52)</option>
              <option value="+34">España (+34)</option>
              <option value="+593">Ecuador (+593)</option>
            </select>
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
              </svg>
            </span>
          </div>
          {/* Número de teléfono */}
          <div className="relative w-full">
            <label htmlFor="phone" className="sr-only">Número de teléfono</label>
            <input id="phone" type="tel" placeholder="Número de teléfono" className="w-full pl-10 h-10 rounded-md border border-gray-300 focus:ring focus:ring-blue-500" />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.91 15.91 0 006.58 6.58l1.83-1.83a1 1 0 011.08-.21 11.72 11.72 0 004.72.91 1 1 0 011 1v3.59a1 1 0 01-1 1A17.93 17.93 0 013 4a1 1 0 011-1h3.6a1 1 0 011 1 11.72 11.72 0 00.91 4.72 1 1 0 01-.21 1.08l-1.83 1.83z"></path>
              </svg>
            </span>
          </div>
        </form>

        {/* Botón para iniciar sesión */}
        <div class="w-full text-center">
          <Link to="/codigo">
          <button type="submit" class="flex  mx-auto bg-gray-600 ">Registrarse</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registrarse;
