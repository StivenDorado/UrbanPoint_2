import React from 'react';
import { Link } from 'react-router-dom';

function Reglas() {
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
                    <b>Respeto y Cortesía:</b> Se espera que todos los usuarios se traten entre sí con respeto y cortesía en todas las interacciones dentro de la plataforma.
                </li>
                <li>
                    <b>Cumplimiento de las Normativas:</b> Los arrendadores deben cumplir con todas las normativas y regulaciones locales relacionadas con el arrendamiento de propiedades, garantizando la legalidad y seguridad de las viviendas ofrecidas.
                </li>
                <li>
                    <b>Veracidad y Transparencia:</b> Toda la información proporcionada por los usuarios, ya sea sobre sus propiedades o sobre ellos mismos, debe ser veraz y precisa. Se prohíbe cualquier intento de engaño o fraude.
                </li>
                <li>
                    <b>Prohibición de Discriminación:</b> Se prohíbe la discriminación por motivos de raza, género, religión, orientación sexual, discapacidad u otros factores protegidos por la ley.
                </li>
                <li>
                    <b>Prohibición de Contenido Inapropiado:</b> Se prohíbe la publicación de contenido inapropiado, ofensivo, ilegal o que viole los derechos de propiedad intelectual de terceros.
                </li>
                <li>
                    <b>Confidencialidad y Privacidad:</b> Se debe respetar la privacidad y confidencialidad de la información personal de los usuarios, y no se permite compartir información personal sin consentimiento.
                </li>
                <li>
                    <b>Resolución de Conflictos:</b> Se proporcionarán procedimientos para la resolución de conflictos entre arrendadores y aprendices, con la mediación de UrbanPoint si es necesario.
                </li>
                <li>
                    <b>Comentarios y Calificaciones Constructivas:</b> Se alienta a los usuarios a dejar comentarios y calificaciones constructivas sobre sus experiencias, con el objetivo de mejorar la calidad del servicio y la comunidad en general.
                </li>
            </ul>
        </div>
    );
}

export default Reglas;
