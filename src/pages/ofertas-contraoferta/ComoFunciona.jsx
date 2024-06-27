import React from 'react';
import { Link } from 'react-router-dom';

function ComoFunciona() {
    return (
    <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Ofertas y contra ofertas</h1>
        <nav className="mb-4">
        <ul className="flex space-x-4">
            <li><Link to="/ofertas">¿Cómo funciona?</Link></li>
            <li><Link to="/implementado">¿Por qué fue Implementado?</Link></li>
        </ul>
        </nav>
        <ul className="list-disc pl-4">
            <li>
            Los arrendadores pueden aprovechar nuestro innovador modelo de contra oferta, que opera como una subasta para el alojamiento. Con esta estrategia, buscamos fomentar la competitividad de precios, beneficiando a ambas partes y contribuyendo a la mejora continua de los alojamientos a largo plazo. Hemos diseñado el modelo de manera simple para garantizar su eficacia óptima.
            </li>
            <li>
            Los aprendices tienen la libertad de ofrecer un precio que consideren justo por el alojamiento que les interesa. Mientras tanto, los arrendadores cuentan con la flexibilidad de establecer un precio inicial, el cual puede ajustarse según las ofertas recibidas de los interesados.
            </li>
            <li>En este proceso, el arrendador tiene la opción de aceptar o rechazar la oferta inicial, y, de manera recíproca, puede realizar una contraoferta en respuesta al monto ofrecido por el aprendiz. Esta dinámica asegura una mayor competencia en los precios, incentivando la adaptación de las tarifas a las características ofrecidas por los alojamientos. Este enfoque innovador no solo simplifica el proceso, sino que también impulsa la eficiencia y la equidad en la transacción entre arrendadores y aprendices.</li>
        </ul>
    </div>
    );
}

export default ComoFunciona;