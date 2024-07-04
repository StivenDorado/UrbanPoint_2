import React from 'react';
import { Link } from 'react-router-dom';

function ReservaAlojamiento() {
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
            <p>¿Necesitas asegurar un alojamiento antes de tu llegada a la ciudad? La mejor manera de reservar tu estancia es creando una reserva previa, para lo cual debes elegir un alojamiento que satisfaga completamente tus necesidades.</p>
            <p>En el proceso de solicitud, encontrarás opciones útiles que facilitarán la comunicación con el arrendador:</p>
            <ul className="list-disc pl-4">
                <li>1. Fecha de llegada: Indica al arrendador la fecha exacta de tu llegada para que esté informado y pueda brindarte un servicio eficiente.</li>
                <li>2. Oferta de precio: Para completar la reserva, debes ofrecer un precio al arrendador por su habitación. La decisión del precio es tuya, pero ten en cuenta que no eres el único que puede enviar ofertas.</li>
                <li>3. Número de huéspedes: Informa al arrendador sobre la cantidad de huéspedes que ocuparán el espacio ofrecido.</li>
                <li>4. Mapa interactivo: Utiliza esta función para visualizar la ubicación precisa del alojamiento, facilitando así la ubicación del lugar reservado.</li>
            </ul>
            <p>Además, ten en cuenta las siguientes recomendaciones:</p>
            <ul className="list-disc pl-4">
                <li>- El arrendador tiene un tiempo limitado para aceptar o cancelar tu reserva.</li>
                <li>- Tus ofertas juegan un papel crucial, ya que influirán en la consideración de tu solicitud por parte del arrendador.</li>
            </ul>
            <p>Recuerda que la claridad y la prontitud en la comunicación son clave para asegurar una reserva exitosa.</p>
        </div>
    );
}

export default ReservaAlojamiento;
