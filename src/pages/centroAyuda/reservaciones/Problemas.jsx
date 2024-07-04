import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Problemas() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/formulario'); 
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Tus reservaciones</h1>
            <nav className="mb-4">
                <ul className="flex space-x-4">
                    <li><Link to="/estado">Estado de tu reserva</Link></li>
                    <li><Link to="/cancelaciones">Cancelaciones</Link></li>
                    <li><Link to="/problemas">Solución de Problemas</Link></li>
                </ul>
            </nav>
            <ul className="list-disc pl-4 mb-4">
                <li>Queremos asegurarnos de que tu experiencia con Urban Point sea lo mejor posible. Por eso, hemos creado un formulario especialmente diseñado para recibir tus comentarios y solucionar cualquier problema que puedas encontrar.</li>
                <li>Para acceder al formulario, simplemente haz clic en el botón a continuación. Después de redactar tu queja, envíala, y nos comprometemos a resolver tu problema de la manera más eficiente posible. No te preocupes, te proporcionaremos una respuesta rápida.</li>

                
                <button 
                onClick={handleButtonClick}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Ir al formulario
            </button>
                <li>Agradecemos tu colaboración en la mejora continua de nuestros servicios. ¡Gracias por elegir Urban Point y por ser parte activa de nuestro compromiso con la excelencia!</li>
            </ul>
        </div>
    );
}

export default Problemas;
