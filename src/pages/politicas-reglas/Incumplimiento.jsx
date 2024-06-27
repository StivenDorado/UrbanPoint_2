import React from 'react';
import { Link } from 'react-router-dom';

function Incumplimiento() {
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
            <p>Publicación de Propiedades:</p>
            <li>Publica propiedades disponibles para arrendo.</li>
            <li>Asegúrate de que fotos y descripciones sean precisas.</li>
            <p>Reservas y Pagos:</p>
            <li>Realiza reservas a través de la app, son vinculantes.</li>
            <p>Registro y Creación de Cuenta:</p>
            <li>Proporciona información precisa y completa al registrarte.</li>
            <li>Gestiona arriendos con las herramientas proporcionadas.</li>
            <p>Responsabilidades:</p>
            <li>Mantén tu propiedad en buen estado si eres propietario.</li>
            <li>Cuida las propiedades que arriendas como inquilino.</li>
            <li>La app no asume responsabilidad por daños.</li>
            <p>Privacidad y Seguridad:</p>
            <li>Tu privacidad está protegida según la política de privacidad.</li>
            <li>La app implementa medidas de seguridad para tu información.</li>
        </ul>
    </div>
    );
}

export default Incumplimiento;