import React from 'react';
import { Link } from 'react-router-dom';

function TemasSeguridad() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Seguridad y accesibilidad</h1>
            <nav className="mb-4">
                <ul className="flex space-x-4">
                    <li><Link to="/temasSeguridad" className="underline">Temas de seguridad</Link></li>
                    <li><Link to="/problemasReportes" className="underline">Cómo reportar problemas</Link></li>
                </ul>
            </nav>
            <p>
                Con el objetivo de elevar la calidad de nuestro servicio, hemos implementado varias herramientas que pueden beneficiar a nuestros usuarios durante su estadía.
            </p>
            <p>
                Al seleccionar un alojamiento, se recomienda revisar las calificaciones y reseñas asociadas. Del mismo modo, verificar la verificación del arrendador puede prevenir posibles contratiempos durante el proceso de reserva.
            </p>
        </div>
    );
}

export default TemasSeguridad;
