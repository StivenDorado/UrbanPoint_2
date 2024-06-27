import React from 'react';
import { Link } from 'react-router-dom';

function Funcionamiento() {
    return (
        <div className="p-8 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Acerca de Urban Point</h1>
            <nav className="mb-4">
                <ul className="flex space-x-4">
                    <NavItem to="/nosotros">¿Quiénes Somos?</NavItem>
                    <NavItem to="/funcionamiento">¿Cómo funciona UrbanPoint?</NavItem>
                    <NavItem to="/politicas">Reservar citas</NavItem>
                </ul>
            </nav>
            <p>
                <b>UrbanPoint funciona como una plataforma digital que facilita la búsqueda de alojamiento temporal para aprendices del SENA CTPI. El funcionamiento de UrbanPoint se puede dividir en los siguientes pasos:</b>
            </p>
            <ul className="list-disc pl-4">
                <li>
                    <b>Registro y Creación de Perfil:</b> Los usuarios, tanto arrendadores como aprendices, deben registrarse en la plataforma y crear un perfil. Aquí los aprendices pueden especificar sus preferencias de alojamiento y los arrendadores pueden detallar las características de sus propiedades.
                </li>
                <li>
                    <b>Búsqueda de Alojamiento:</b> Los aprendices pueden explorar las opciones de alojamiento disponibles utilizando filtros como ubicación, tipo de alojamiento, precio y comodidades. La plataforma muestra una lista de resultados que se ajustan a los criterios de búsqueda del usuario.
                </li>
                <li>
                    <b>Visualización de Detalles:</b> Los aprendices pueden ver los detalles completos de cada propiedad, incluyendo fotos, descripción, precio y reseñas de otros usuarios que hayan vivido allí anteriormente.
                </li>
                <li>
                    <b>Contratación y Negociación:</b> Los aprendices pueden contactar directamente a los arrendadores a través de la plataforma para negociar el precio o hacer una reserva. También tienen la opción de hacer contrapropuestas y negociar los términos del contrato de arrendamiento.
                </li>
                <li>
                    <b>Confirmación de Reserva:</b> Una vez que se llega a un acuerdo entre el aprendiz y el arrendador, se realiza la reserva a través de la plataforma. UrbanPoint puede proporcionar herramientas de pago seguro para garantizar transacciones seguras.
                </li>
                <li>
                    <b>Estadía:</b>Durante la estadía, los aprendices pueden utilizar la plataforma para comunicarse con el arrendador, realizar pagos adicionales si es necesario y dejar reseñas y calificaciones una vez finalizada la estadía.
                </li>
            </ul>
        </div>
    );
}

function NavItem({ to, children }) {
    return (
        <li>
            <Link to={to} className="underline">{children}</Link>
        </li>
    );
}

export default Funcionamiento;
