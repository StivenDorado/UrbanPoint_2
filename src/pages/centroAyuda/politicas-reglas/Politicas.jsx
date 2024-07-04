import React from 'react';
import { Link } from 'react-router-dom';

function Politicas() {
    return (
    <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Políticas y reglas</h1>
        <nav className="mb-4">
        <ul className="flex space-x-4">
            <li><Link to="/politicas-uso">Políticas de Uso</Link></li>
            <li><Link to="/incumplimiento">Incumplimiento de reglas</Link></li>
        </ul>
        </nav>
        <ul className="list-disc pl-4">
            <p>Registro y Creación de Cuenta:</p>
            <li>Durante el registro, es fundamental proporcionar información precisa y completa.</li>
            <li>La app se reserva el derecho de cancelar cuentas que no cumplan con las políticas de uso.</li>
            <p>Publicación de Propiedades:</p>
            <li>Las propiedades deben estar disponibles para arrendar.</li>
            <li>Fotos y descripciones deben ser precisas y actualizadas.</li>
            <li>Los propietarios establecen el precio y condiciones.</li>
            <p>Reservas y Pagos: </p>
            <li>Las reservas a través de la app son vinculantes para ambas partes.</li>
            <p>Comunicación y Gestión de Arriendos:</p>
            <li>La app proporciona un canal seguro para propietarios e inquilinos.</li>
            <li>Ofrece herramientas para gestionar arriendos sin intervenir en disputas.</li>
            <p>Privacidad y Seguridad:</p>
            <li>La app protege la privacidad según su política.</li>
            <li>Implementa medidas de seguridad para la información del usuario.</li>
            <p>Modificaciones a las Políticas:</p>
            <li>Reserva el derecho de modificar políticas. </li>
            <li>Usuarios notificados de cambios.</li>
            <p>Aceptación de Políticas de Uso:</p>
            <li>Al usar la app, los usuarios aceptan las políticas.</li>
            <li>Incumplir puede resultar en la cancelación de la cuenta.</li>
        </ul>
    </div>
    );
}

export default Politicas;