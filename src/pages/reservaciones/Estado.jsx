import React from 'react';
import { Link } from 'react-router-dom';

function Estado() {
    return (
    <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Tus reservaciones</h1>
        <nav className="mb-4">
        <ul className="flex space-x-4">
        <li><Link to="/estado">Estado de tu reserva</Link></li>
            <li><Link to="/cancelaciones">Cancelaciones</Link></li>
            <li><Link to="/problemas">Solución de Problemas</Link></li>

        </ul>
        </nav>
        <ul className="list-disc pl-4">
        <li>El estado de tu reserva te brinda actualizaciones sobre el progreso de tu reserva.
        </li>
        <li>Llegada hoy</li>
        <p>El huésped llegará en las próximas 24 horas.</p>
        <li>Llegada mañana</li>
        <p>El huésped se espera pronto, pero no dentro de las próximas 24 horas.
        </p>
        <li>Llegada en -- días</li>
        <p>El huésped realizará el check-in en el número de días especificado. Es recomendable imprimir los detalles de la reserva y coordinar el check-in si aún no lo has hecho.
        </p>
        <li>Identificación del huésped pendiente</li>
        <p>El anfitrión requiere que el huésped verifique su identidad antes de aceptar la solicitud de reserva. Se otorgan 12 horas para completar este proceso; de lo contrario, la solicitud expirará.
        </p>
        <li>Reseña del huésped pendiente</li>
        <p>El huésped ha realizado el check-out y tiene 14 días para escribir una reseña sobre su estancia.</p>
        </ul>
    </div>
    );
}

export default Estado;
