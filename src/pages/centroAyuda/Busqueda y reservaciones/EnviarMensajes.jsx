import React from 'react';
import { Link } from 'react-router-dom';

function EnviarMensajes() {
    return (
        <div className="p-8 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Búsqueda y reservación</h1>
            <nav className="mb-4">
                <ul className="flex space-x-4">
                    <li><Link to="/consejosBusqueda" className="underline">Consejos de Búsqueda</Link></li>
                    <li><Link to="/reservacionAlojamiento">Reservar alojamientos</Link></li>
                    <li><Link to="/reservarCitas">Reservar citas</Link></li>
                    <li><Link to="/enviarMensajes">Enviar mensajes</Link></li>
                </ul>
            </nav>
            <p>¿Buscas una comunicación más cercana?</p>
            <ul className="list-disc pl-4">
                <li>
                    Hemos decidido implementar un chat que facilitará la interacción con el arrendador, promoviendo así una comunicación más personalizada. Con esta iniciativa, pretendemos facilitar la coordinación de fechas y proporcionar respuestas a cualquier pregunta que puedas tener sobre el alojamiento.
                </li>
                <li>
                    Envía un mensaje al arrendador para iniciar una negociación sobre el lugar de alojamiento. Es tan sencillo como enviar un mensaje personal, y el arrendador se pondrá en contacto contigo para dar inicio a la negociación.
                </li>
                <li>
                    Recuerda que la claridad y la prontitud en la comunicación son fundamentales para asegurar una negociación exitosa.
                </li>
            </ul>
        </div>
    );
}

export default EnviarMensajes;
