import React from 'react';
import { Link } from 'react-router-dom';

function ConsejosBusqueda() {
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
      <p>A veces solo quieres explorar. Otras, sabes exactamente lo que estás buscando. Los filtros de búsqueda son una excelente forma de acotar tus opciones cuando estás buscando un lugar donde quedarte. Si eres flexible, puedes seleccionar intervalos de fechas y tipos de lugares para ayudar a orientar tu búsqueda.</p>
      <p>En la parte superior de la página de resultados de búsqueda, se encuentran los filtros más destacados, que incluyen opciones como:</p>
      <ul className="list-disc pl-4">
        <li>Tipo de hospedaje: desde habitaciones compartidas hasta alojamientos completos; aquí obtendrás detalles adicionales sobre las diversas categorías de hospedaje.</li>
        <li>Servicios del hospedaje: elige los distintos servicios que tus necesidades ameriten así la búsqueda será más objetiva.</li>
        <li>Características de accesibilidad: ¿Tienes necesidades especiales o poco usuales? en esta casilla puedes seleccionar casillas especiales muy específicas, que atienden a las necesidades más personales de los aprendices SENA.</li>
        <li>Habitaciones y baños: La comodidad es importante, por lo cual podemos elegir la cantidad de habitaciones así como su tamaño, de igual forma podemos decidir qué tipo de baño necesitamos para nuestro uso continuo.</li>
        <li>Tiempo de estadía: En esta sección, puedes especificar la duración de tu estancia durante la cual ocuparás la habitación que solicitarás.</li>
      </ul>
    </div>
  );
}

export default ConsejosBusqueda;
