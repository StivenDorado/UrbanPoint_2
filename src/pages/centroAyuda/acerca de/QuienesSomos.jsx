import React from 'react';
import { Link } from 'react-router-dom';

function QuienesSomos() {
    return (
        <div className="p-8 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Acerca de Urban Point</h1>
            <nav className="mb-4">
                <ul className="flex space-x-4">
                    <li><Link to="/nosotros" className="underline">¿Quiénes Somos?</Link></li>
                    <li><Link to="/funcionamiento">¿Cómo funciona UrbanPoint?</Link></li>
                    <li><Link to="/politicas">Reservar citas</Link></li>
                </ul>
            </nav>
            <ul className="list-disc pl-4">
                <li>
                    Como UrbanPoint, somos una empresa dedicada a facilitar la búsqueda de alojamiento temporal para aprendices del SENA CTPI. Nos comprometemos a proporcionar una solución integral y eficiente a las necesidades de vivienda de esta comunidad estudiantil, ofreciendo una plataforma digital intuitiva y segura que conecta a los estudiantes con una variedad de opciones de alojamiento cercanas a la institución. Nuestro equipo está formado por profesionales comprometidos con mejorar la experiencia educativa de los aprendices, brindándoles acceso a viviendas seguras, cómodas y adaptadas a sus necesidades individuales. Con un enfoque centrado en el usuario y una pasión por la innovación, nos esforzamos por ser el socio confiable y de confianza para los aprendices del SENA CTPI en su búsqueda de alojamiento temporal.
                </li>
            </ul>
        </div>
    );
}

export default QuienesSomos;
