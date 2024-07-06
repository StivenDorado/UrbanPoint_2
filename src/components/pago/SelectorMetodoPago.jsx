// src/components/SelectorMetodoPago.js
import React from 'react';

const SelectorMetodoPago = ({ metodoSeleccionado, setMetodoSeleccionado }) => {
  return (
    <div className="p-4 text-black">
      <h2 className="text-lg font-semibold mb-4">Paga con</h2>
      <div className="space-y-2">
        <div className="flex items-center">
          <input
            type="radio"
            id="bancolombia"
            name="metodoPago"
            value="Bancolombia"
            checked={metodoSeleccionado === 'Bancolombia'}
            onChange={(e) => setMetodoSeleccionado(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="bancolombia" className="flex items-center">
          <img src="./public/Bancolombia-logo.png" alt="logo bancolombia"className="h-6" />
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="nequi"
            name="metodoPago"
            value="Nequi"
            checked={metodoSeleccionado === 'Nequi'}
            onChange={(e) => setMetodoSeleccionado(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="nequi" className="flex items-center">
            <img src="/public/logo-nequi.png" alt="Nequi" className="h-6" />
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="efectivo"
            name="metodoPago"
            value="Efectivo"
            checked={metodoSeleccionado === 'Efectivo'}
            onChange={(e) => setMetodoSeleccionado(e.target.value)}
            className="mr-2"
          />
          <label htmlFor="efectivo" className="flex items-center">
            <img src="/public/logo-efecty.png" alt="Efectivo" className="h-6" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SelectorMetodoPago;
