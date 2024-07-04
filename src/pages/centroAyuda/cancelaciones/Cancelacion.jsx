import React from 'react';
import { Link } from 'react-router-dom';

function Cancelacion() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Cancelaciones</h1>
            <nav className="mb-4">
                <ul className="flex space-x-4">
                <li><Link to="/cancilacion">Cancelacion de Reserva</Link></li>
                </ul>
            </nav>
            <li>Como cancelar la reservacion de el arriendo.</li>
            <p>Tus planes cambiaron y ahora tienes que cancelar la reservacion. No hay problema, Puedes acceder a Solicitud de reservas para cancelar tu reservacion.</p>
            <p>*Haz click en el apartado de solicitud de reservas</p>
            <p>*Dentro de el apartado de solicitud de reservas, busca y selecciona la que quieras cancelar </p>
            <p>*Despues de precionar el Boton "Cancelar Reserva" escribe el motivo por el cual quieres cancelar</p>
        </div>
    );
}

export default Cancelacion;
