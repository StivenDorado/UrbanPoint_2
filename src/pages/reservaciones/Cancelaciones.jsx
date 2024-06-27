import React from 'react';
import { Link } from 'react-router-dom';

function Cancelaciones() {
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
        <li>Cancelada</li>
        <p>La reservación se canceló, probablemente porque:</p>
        <li>El usuario no verificó su identidad en el plazo de 12 horas</li>
        <li>No se realizó el pago y no actualizó su información de pago en un plazo de 24 horas</li>
        <p>- Oferta vencida</p>
        <li>El huésped recibió una oferta especial del anfitrión, pero no la aceptó en el plazo de 24 horas.</li>
        </ul>
    </div>
    );
}

export default Cancelaciones;
