// ./src/Dudas.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/preguntas/Footer';

function Dudas() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h2 className="font-bold">Búsqueda y reservación</h2>
            <ul className="list-disc pl-4">
              <li><Link to="/consejosBusqueda">Consejos de Búsqueda</Link></li>
              <li><Link to="/reservacionAlojamiento">Reservar alojamientos</Link></li>
              <li><Link to="/reservarCitas">Reservar citas</Link></li>
              <li><Link to="/enviarMensajes">Enviar mensajes</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Seguridad y accesibilidad</h2>
            <ul className="list-disc pl-4">
              <li><Link to="/temasSeguridad">Temas de seguridad</Link></li>
              <li><Link to="/problemasReportes">Cómo reportar problemas</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Acerca de Urban Point</h2>
            <ul className="list-disc pl-4">
              <li><Link to="/nosotros">¿Quiénes somos?</Link></li>
              <li><Link to="/funcionamiento">¿Cómo funciona UrbanPoint?</Link></li>
              <li><Link to="/politicas">Políticas y reglas de comunidad</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Tu cuenta</h2>
            <ul className="list-disc pl-4">
              <li><Link to="/cuenta">Administrar tu cuenta</Link></li>
              <li><Link to="/verificacion">Identificación o Verificación</Link></li>
              <li><Link to="/nivelseguridad">Nivel de Seguridad</Link></li>
              <li><Link to="/reseñas">Reseñas</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Tus reservaciones</h2>
            <ul className="list-disc pl-4">
              <li><Link to="/estado">Estado de tu reserva</Link></li>
              <li><Link to="/cancelaciones">Cancelaciones</Link></li>
              <li><Link to="/problemas">Solución de Problemas</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Ofertas y contra ofertas</h2>
            <ul className="list-disc pl-4">
              <li><Link to="/ofertas">¿Cómo funciona?</Link></li>
              <li><Link to="/implementado">¿Por qué fue Implementado?</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Políticas y reglas</h2>
            <ul className="list-disc pl-4">
              <li><Link to="/politicas-uso">Políticas de Uso</Link></li>
              <li><Link to="/incumplimiento">Incumplimiento de reglas</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Cancelaciones</h2>
            <ul className="list-disc pl-4">
              <li><Link to="/cancilacion">Cancelacion de Reserva</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Pagos y cobros</h2>
            <ul className="list-disc pl-4">
              <li><Link to="/precios">Precios y tarifas</Link></li>
              <li><Link to="/facturas">Facturas y recibos</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dudas;
