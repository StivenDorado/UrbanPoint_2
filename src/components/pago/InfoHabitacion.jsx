// src/components/InfoHabitacion.js
import React from 'react';

const InfoHabitacion = () => {
  return (
    <div className="p-4 borderborder-gray-600 rounded-lg text-black">
      <h2 className="text-lg font-semibold mb-4">Información de habitación</h2>
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gray-300 rounded mr-4"></div>
        <div>
          <h3 className="font-semibold">APARTAMENTO EN BELLO HORIZONTE</h3>
          <p>⭐ 0.0 (0 RESEÑAS)</p>
          <a href="#" className="text-blue-500">Ver publicación</a>
        </div>
      </div>
    </div>
  );
};

export default InfoHabitacion;
