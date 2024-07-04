import React from 'react';
import { Link } from 'react-router-dom';

function ReservarCitas() {
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
            <p>¿Quieres visitar el alojamiento antes de tomar una decisión? Para estar seguro de tu elección puedes solicitar una cita, en la cual el arrendador te dará acceso para que puedas ir de visita al inmueble y ver todo lo que ofrece, lo que te ayudará a elegir mejor tu lugar de alojamiento.</p>
            <p>En el proceso de agendar cita, encontrarás opciones útiles que facilitarán la comunicación con el arrendador para acordar la visita:</p>
            <ul className="list-disc pl-4">
                <li>1. Fecha de visita: Indica al arrendador la fecha exacta de tu visita para que esté informado y pueda brindarte un servicio eficiente.</li>
                <li>2. Hora de la cita: Para que el arrendador pueda preparar la visita, es necesario especificar tu hora de llegada.</li>
                <li>3. Número de acompañantes: Informa al arrendador sobre la cantidad de acompañantes que acudirán a la visita, lo que ayudará a que se haga una idea de cuántas personas irán.</li>
                <li>4. Mapa interactivo: Utiliza esta función para visualizar la ubicación precisa del alojamiento, facilitando así la ubicación del lugar al cual se hará la visita.</li>
                <li>5. Cancelar cita: Si surge algún imprevisto, puedes cancelar la cita para evitar que el arrendador espere tu llegada.</li>
            </ul>
            <p>Además, ten en cuenta las siguientes recomendaciones:</p>
            <ul className="list-disc pl-4">
                <li>- El arrendador tiene un tiempo limitado para aceptar o cancelar tu cita.</li>
                <li>- Podrás chatear con el arrendador para mejorar la comunicación entre ambas partes.</li>
            </ul>
        </div>
    );
}

export default ReservarCitas;
