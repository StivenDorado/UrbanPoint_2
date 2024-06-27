import React from 'react';
import { Link } from 'react-router-dom';

function Facturas() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Pagos y cobros</h1>
            <nav className="mb-4">
                <ul className="flex space-x-4">
                <li><Link to="/precios">Precios y tarifas</Link></li>
                <li><Link to="/facturas">Facturas y recibos</Link></li>
                </ul>
            </nav>
            <p>¿Cómo puedo obtener una factura o recibo de mi alquiler?</p>
            <li>Puedes obtener una factura o recibo de tu alquiler en la sección "Mis alquileres" de la aplicación. Simplemente selecciona el alquiler del que deseas obtener la factura o recibo y haz clic en el botón "Descargar factura".</li>
            <p>¿Qué información se incluye en la factura o recibo?</p>
            <p>La factura o recibo incluirá la siguiente información:</p>
            <li>Nombre de Aprendiz</li>
            <li>Nombre del arrendatario</li>
            <li>Dirección del inmueble</li>
            <li>Fecha del alquiler</li>
            <li>Precio del alquiler</li>
            <li>Tarifas de la aplicación</li>
            <p>¿Puedo obtener una factura o recibo de un alquiler que ya ha finalizado?</p>
            <li>Sí, puedes obtener una factura o recibo de un alquiler que ya ha finalizado. Para ello, ve a la sección "Historial de alquileres" de la aplicación y selecciona el alquiler del que deseas obtener la factura o recibo. Luego, haz clic en el botón "Descargar factura".</li>
        </div>
    );
}

export default Facturas;
