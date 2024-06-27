import React from 'react';
import { Link } from 'react-router-dom';

function Pagos() {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Pagos y cobros</h1>
            <nav className="mb-4">
                <ul className="flex space-x-4">
                <li><Link to="/precios">Precios y tarifas</Link></li>
                <li><Link to="/facturas">Facturas y recibos</Link></li>
                </ul>
            </nav>
            <p>¿Cómo se establecen los precios y tarifa de los alquileres?</p>
            <p>Los precios y tarifa de los alquileres en la aplicación se establecen por los propietarios de cada inmueble, quienes basan sus precios en una serie de factores que incluyen:</p>
            <li>Ubicación: La ubicación es uno de los factores más importantes que determinan el precio del alquiler. Los inmuebles ubicados en zonas céntricas, con fácil acceso a transporte público, centros comerciales, parques y otros servicios, suelen tener precios más altos que aquellos ubicados en zonas más periféricas. La demanda de alquileres en una zona específica también juega un papel importante en la determinación del precio.</li>
            <li>
Tamaño del inmueble: El tamaño del inmueble es otro factor importante que influye en el precio del alquiler. Los inmuebles más grandes, con más habitaciones y baños, generalmente tienen precios más altos que los inmuebles más pequeños.
            </li>
            <li>Características del inmueble: Las características adicionales que ofrece un inmueble también pueden afectar su precio. Los inmuebles que incluyen servicios como wifi, lavandería, suelen tener precios más altos que aquellos que no los tienen.</li>
        </div>
    );
}

export default Pagos;
