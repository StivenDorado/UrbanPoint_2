import React, { useState, useEffect } from 'react';

const Clock = () => {
  // Declaramos los estados del componente
  const [date, setDate] = useState(new Date());
  const [customDate, setCustomDate] = useState(new Date());
  const [customTime, setCustomTime] = useState(new Date());
  const [appointment, setAppointment] = useState('');

  // Usamos el hook useEffect para actualizar la fecha cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Limpiamos el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  // Manejamos el cambio de la fecha
  const handleDateChange = (event) => {
    // Creamos una nueva fecha a partir del valor del input
    const selectedDate = new Date(event.target.value);
    // Creamos una nueva fecha sin la hora y minutos
    const newCustomDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
    // Creamos una nueva fecha con el día siguiente
    const nextDay = new Date(newCustomDate.getTime() + 24 * 60 * 60 * 1000);
    // Actualizamos los estados de la fecha y hora personalizadas
    setCustomDate(nextDay);
    setCustomTime(nextDay);
    // Actualizamos la cita
    updateAppointment(nextDay);
  };

  // Manejamos el cambio de la hora
  const handleTimeChange = (event) => {
    // Extraemos las horas y minutos del valor del input
    const [hours, minutes] = event.target.value.split(':');
    // Creamos una nueva fecha con la fecha personalizada
    const newTime = new Date(customDate);
    // Establecemos las nuevas horas y minutos en la fecha
    newTime.setHours(parseInt(hours));
    newTime.setMinutes(parseInt(minutes));
    // Actualizamos el estado de la hora personalizada
    setCustomTime(newTime);
    // Actualizamos la cita
    updateAppointment(newTime);
  };

  // Manejamos la creación de la cita
  const handleAppointmentCreate = () => {
    // Actualizamos la cita con la hora personalizada
    updateAppointment(customTime);
  };

  // Actualizamos la información de la cita
  const updateAppointment = (date) => {
    // Formateamos la fecha y hora para mostrarlas en español
    const formattedDate = `${date.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`;
    const formattedTime = `${date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: true })}`;
    // Actualizamos el estado de la cita
    setAppointment(`Cita programada para el ${formattedDate} a las ${formattedTime}`);
  };

  // Renderizamos el componente
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 text-white h-screen">
      <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-md p-6 w-1/2">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="date font-bold text-2xl">
            {customDate.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div className="time font-bold text-4xl text-blue-500">
            {customTime.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', hour12: true })}
          </div>
        </div>
        <div className="input-container flex items-center mt-6 w-full">
          <label htmlFor="date-input" className="input-label font-medium mr-2 text-white">Fecha:</label>
          <input
            type="date"
            id="date-input"
            value={customDate.toISOString().substring(0, 10)} // Formato ISO-8601 (yyyy-mm-dd)
            onChange={handleDateChange}
            className="date-input px-2 py-1 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white w-full"
          />
        </div>
        <div className="input-container flex items-center mt-2 w-full">
          <label htmlFor="time-input" className="input-label font-medium mr-2 text-white">Hora:</label>
          <input
            type="time"
            id="time-input"
            value={customTime.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}
            onChange={handleTimeChange}
            className="time-input px-2 py-1 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-white w-full"
          />
        </div>
        <button
          onClick={handleAppointmentCreate}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Crear Cita
        </button>
        <div className="bg-gray-800 p-4 rounded-md shadow-md mt-4 w-full">
          {appointment && (
            <p>{appointment}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clock;
