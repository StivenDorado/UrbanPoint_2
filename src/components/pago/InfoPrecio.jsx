// src/components/InfoPrecio.js
import React from 'react';

const InfoPrecio = () => {
  return (
    <div className="p-4 border border-gray-600 rounded-lg mt-4 text-black">
      <h2 className="text-lg font-semibold mb-4">Información de precio</h2>
      <div className="mb-2">Cobro mensual: $210,000.00 COP</div>
      <div className="mb-2">Costo Servicios: $50,000.00 COP</div>
      <div className="font-semibold">Total del Costo: $260,000.00 COP</div>
    </div>
  );
};

export default InfoPrecio;
