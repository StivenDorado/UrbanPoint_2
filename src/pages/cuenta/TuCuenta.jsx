import React from 'react';
import { Link } from 'react-router-dom';

function TuCuenta() {
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
        <ul className="list-disc pl-4">
        <li>1.Accede a la Configuración:</li>
        <p>Cuando inicies la aplicación, ve a la sección de Configuración o Ajustes. Por lo general, encontrarás esta opción en el menú principal, como el lugar central para personalizar tu experiencia.</p>
        <li>2.Actualiza tu Perfil:</li>
        <p>"Perfil" o "Información Personal". Es vital asegurarte de que tu nombre esté al día y tengas una foto reciente para que tu interacción sea más personalizada.</p>
        <li>3.Gestiona la Seguridad:</li>
        <p>"Seguridad" o "Configuración de Cuenta".podrás cambiar tu contraseña, activar la verificación en dos pasos y garantizar la protección de tu cuenta. Es como ponerle un candado extra a tu información.</p>
        <li>4.Métodos de Pago y Finanzas:</li>
        <p>"Métodos de Pago" o "Finanzas". En este espacio, puedes agregar, quitar o actualizar la información, asegurando transacciones sin complicaciones. Es tu área financiera dentro de la aplicación.</p>
        <li>5.Configura Notificaciones:</li>
        <p>"Notificaciones" ajusta la frecuencia y tipo de mensajes que deseas recibir. Esto te permite estar informado sin sentirte abrumado, para adaptar la aplicación a tus preferencias.</p>
        </ul>
    </div>
    );
}

export default TuCuenta;
