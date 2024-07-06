// src/pages/ConfirmacionPago.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/pago/Header';
import PagoBancolombia from '../../components/pago/PagoBancolombia';
import PagoNequi from '../../components/pago/PagoNequi';
import PagoEfectivo from '../../components/pago/PagoEfectivo';

const ConfirmacionPago = () => {
  const location = useLocation();
  const { metodoSeleccionado } = location.state || { metodoSeleccionado: 'Bancolombia' };

  return (
    <div>
      <Header title="Confirma y Paga text-black" />
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="p-4 border border-gray-600 text-black rounded-lg">
              <h2 className="text-lg font-semibold mb-4">
                {metodoSeleccionado === 'Bancolombia' ? (
                  <img src="./public/Bancolombia-logo.png" alt="logo bancolombia" className="h-6" />
                ) : metodoSeleccionado === 'Nequi' ? (
                  <img src="/public/logo-nequi.png" alt="Nequi" className="h-6" />
                ) : (
                  <img src="/public/logo-efecty.png" alt="Efectivo" className="h-6" />
                )}
              </h2>
              {metodoSeleccionado === 'Bancolombia' && <PagoBancolombia />}
              {metodoSeleccionado === 'Nequi' && <PagoNequi />}
              {metodoSeleccionado === 'Efectivo' && <PagoEfectivo />}
              <div className="mt-4">
                <h3 className="font-semibold">Contacta con el arrendatario para que envíes la información del pago</h3>
                <div className="flex items-center mt-2">
                  <div className="w-10 h-10 bg-gray-600 text-black rounded-full mr-2"></div>
                  <div>
                    <p>Eduardo Lopez</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-4 border border-gray-600 text-black rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Información de habitación</h2>
              <img src="./public/lugar.png" alt="" className="h-12" />
              <p>Apartamento en Bello Horizonte</p>
              <p className="text-sm">0.0 (0 reseñas)</p>
              <a href="#" className="text-blue-500">Ver publicación</a>
            </div>
            <div className="p-4 border border-gray-600 text-black rounded-lg mt-4">
              <h2 className="text-lg font-semibold mb-4">Información de precio</h2>
              <p>Cobro mensual: $210.000,00 COP</p>
              <p>Costo de servicios: $50.000,00 COP</p>
              <p className="font-semibold">Total del Costo: $260.000,00 COP</p>
            </div>
            <div className="p-4 border border-gray-600 text-black rounded-lg mt-4">
              <h2 className="text-lg font-semibold mb-4">Direcciones</h2>
              <p>Calle 13B #12-47 Barrio ****</p>
              <p>Arrendatario: Eduardo Lopez</p>
              <a href="#" className="text-blue-500">Ver en el mapa</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacionPago;