import React from 'react';
import { Link } from 'react-router-dom';

function Implementado() {
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
            <p>La implementación del modelo de contraofertas se llevó a cabo con el objetivo principal de fomentar la competitividad y mejorar la dinámica de precios en el proceso de arrendamiento. Al responder a la pregunta sobre por qué fue implementado, podemos destacar varios beneficios y razones clave:</p>
            <li>1. Competitividad de Precios: La introducción de contraofertas busca crear un entorno competitivo donde tanto arrendadores como aprendices puedan influir en el precio del alojamiento, promoviendo tarifas más justas y equitativas.</li>
            <li>2 .Mejora Continua: El modelo fue adoptado como parte de una estrategia para impulsar la mejora continua en la calidad de los alojamientos. Al permitir ajustes dinámicos en los precios, se incentiva a los arrendadores a ofrecer servicios y condiciones más atractivas.</li>
            <li>3 .Flexibilidad para Ambas Partes: La implementación del modelo proporciona flexibilidad tanto a los arrendadores como a los aprendices al permitirles proponer y negociar precios de manera activa, adaptándose a las necesidades y expectativas de ambas partes.</li>
            <li>
            Ajuste a las Características Ofrecidas: La contraoferta incentiva a los arrendadores a considerar las características específicas ofrecidas por los aprendices al proponer precios competitivos. Esto conduce a una alineación más precisa entre las expectativas de ambas partes.
            </li>
            <li>
            Innovación y Diferenciación: La implementación de este modelo refleja un enfoque innovador en el sector de arrendamiento, diferenciando la plataforma al ofrecer una experiencia más dinámica y participativa para los usuarios.
            </li>
        </ul>
    </div>
    );
}

export default Implementado;