// src/components/InfoDireccion.js
import React from 'react';

const InfoDireccion = () => {
    return (
    <div className="p-4 border border-gray-600 rounded-lg mt-4 text-black">
        <h2 className="text-lg font-semibold mb-4">Direcciones</h2>
      <div>Calle 138 #12-47 Barrio ****</div>
        <div>Arrendatario: Eduardo Lopez</div>
        <a href="#" className="text-blue-500">Ver en el mapa</a>
    </div>
    );
};

export default InfoDireccion;
