import React from 'react';
import { Link } from 'react-router-dom';

function Reseñas() {
    return (
    <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Tu cuenta</h1>
        <nav className="mb-4">
        <ul className="flex space-x-4">
            <li><Link to="/cuenta" className="underline">Administrar tu cuenta</Link></li>
            <li><Link to="/verificacion">Identificación o Verificación</Link></li>
            <li><Link to="/nivelseguridad">Nivel de Seguridad</Link></li>
            <li><Link to="/reseñas">Reseñas</Link></li>

        </ul>
        </nav>
        <p>Las reseñas son clave en una app de alojamiento, ofreciendo valiosa retroalimentación directa de usuarios. Su importancia abarca varios aspectos:</p>
        <ul className="list-disc pl-4">
        <li>Transparencia y Confianza: Brindan una visión auténtica de la experiencia de otros usuarios, generando confianza entre propietarios e inquilinos.</li>
        <li>
        Evaluación de la Calidad: Permite a los usuarios evaluar propiedades y servicios, crucial para quienes buscan asegurarse de que cumplan sus expectativas al alquilar.
        </li>
        <li>
        Mejora Continua: Actúan como herramienta valiosa para ajustes y actualizaciones basadas en la retroalimentación del usuario, identificando áreas de oportunidad y fortalezas.
        </li>
        <li>
        Resolución de Problemas: Ofrecen a los usuarios la oportunidad de expresar problemas, permitiendo a la app abordar y resolver situaciones específicas, mejorando la experiencia general.
        </li>
        <li>
        Adaptación a Necesidades del Usuario: Comprendiendo preferencias a través de reseñas, la app puede ajustarse para satisfacer mejor las demandas del mercado.
        </li>
        <li>
        Creación de Comunidad: Fomentan un sentido de comunidad entre usuarios, fortaleciendo la interacción social mediante compartir experiencias y recomendaciones.
        </li>
        <li>
        Estímulo para Propietarios: Las reseñas positivas motivan a los propietarios, reconociendo y recompensando su esfuerzo por ofrecer un servicio excepcional.
        </li>
        <li>
        Orientación para Decisiones: Proporcionan información valiosa que orienta decisiones a usuarios en busca de alojamiento, ofreciendo percepciones sobre aspectos específicos de las propiedades.
        </li>
        </ul>
    </div>
    );
}

export default Reseñas;
