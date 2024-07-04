import React from 'react';

const Iniciosesion = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="space-y-4">
        <h2 className="text-3xl text-center font-bold text-black">Inicia Sesion</h2>
        {/* Caja de imagenes */}
        <div className="flex gap-4  items-center justify-center">
          <img src="../../../public/BxBxlGmail.svg" width="50" alt="Image 2" className="mx-auto" />
          <img src="../../../public/MdiFacebook.svg" width="45" alt="Image 1" className="mx-auto" />
          <img src="../../../public/LogosApple.svg" width="33" alt="Image 3" className="mx-auto" />
        </div>
        <p className='text-black'>Ingrese su Región y Número de teléfono </p>
        {/* Formulario de información */}
        <form class="min-w-full space-y-5">
          {/* Selecciona país */}
          <div class="relative w-full">
            <label for="country" class="sr-only">Country</label>
            <select id="country" class="w-full pl-10 h-10 rounded-md border border-gray-300 focus:ring focus:ring-blue-500">
              <option value="(+57)" disabled selected>Colombia (+57)</option>
              <option value="(+507)">Panama (+507)</option>
              <option value="(+52)">Mexico (+52)</option>
              <option value="(+34)">España (+34)</option>
              <option value="(+593)">Ecuador (+593)</option>
            </select>
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
              </svg>
            </span>
          </div>
          {/* Número de teléfono */}
          <div class="relative w-full">
            <label for="phone" class="sr-only">Número de teléfono</label>
            <input id="phone" type="tel" placeholder="Número de teléfono" class="w-full pl-10 h-10 rounded-md border border-gray-300 focus:ring focus:ring-blue-500" />
            <span class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.91 15.91 0 006.58 6.58l1.83-1.83a1 1 0 011.08-.21 11.72 11.72 0 004.72.91 1 1 0 011 1v3.59a1 1 0 01-1 1A17.93 17.93 0 013 4a1 1 0 011-1h3.6a1 1 0 011 1 11.72 11.72 0 00.91 4.72 1 1 0 01-.21 1.08l-1.83 1.83z"></path>
              </svg>
            </span>
          </div>
        </form>
        {/* Botones reguistro */}
        <br/>
        <h2 className='text-2xl text-center text-black font-bold'>¡Bienvenido!</h2>
        

        {/* Botón para iniciar sesión */}
        <div className="text-center">
          <h4 className="text-2xl font-bold text-black">Hola!</h4>
          <button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md ">Inicia Sesión</button>
        </div>
      </div>
    </div>
  );
}
export default Iniciosesion;
