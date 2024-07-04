import React from 'react';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <main className="flex-1 flex flex-col items-center justify-center mt-64 px-4 ">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-2xl font-bold ">Confirma tu número de teléfono</h1>
          <input type="tel" defaultValue="+57" className="w-full px-4 py-2 bg-white border border-gray-800 rounded-md  text-black" />
          <div className="grid grid-cols-3 gap-2">
            <button className="col-span-1 py-2 px-4 bg-black-450 text-white border border-transparent hover:bg-gray-600 rounded-md">
              Más opciones
            </button>
            <Link to="/confirmacion">
            <button className="col-span-1 py-2 px-4 bg-gray-500 text-white hover:bg-gray-600 rounded-md">
              Continuar
            </button>
            </Link>
          </div>
        </div>
      </main>
      
    </>
  )
}
