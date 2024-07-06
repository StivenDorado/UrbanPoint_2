// src/pages/ConfirmaYPaga.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectorMetodoPago from '../../components/pago/SelectorMetodoPago';
import InfoHabitacion from '../../components/pago/InfoHabitacion';
import InfoPrecio from '../../components/pago/InfoPrecio';
import InfoDireccion from '../../components/pago/InfoDireccion';
import Header from '../../components/pago/Header';
import Footer from '../../components/footer/Footer';

const ConfirmaYPaga = () => {
  const [metodoSeleccionado, setMetodoSeleccionado] = useState('Bancolombia');
  const navigate = useNavigate();

  const handleContinuar = () => {
    navigate('/confirmacion-pago', { state: { metodoSeleccionado } });
  };

  return (
    <div>
      <Header title="Confirma y Paga" />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="p-4 border border-gray-600 text-black rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Elige cómo quieres pagar</h2>
              <div className="mb-4">Pago único (mensualmente)</div>
              <div>Paga en total (260,000.00 COP)</div>
              <div>Fecha: 00/00/00</div>
            </div>
            <SelectorMetodoPago metodoSeleccionado={metodoSeleccionado} setMetodoSeleccionado={setMetodoSeleccionado} />
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded" onClick={handleContinuar}>Continúa</button>
          </div>
          <div>
            <InfoHabitacion />
            <InfoPrecio />
            <InfoDireccion />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default ConfirmaYPaga;
