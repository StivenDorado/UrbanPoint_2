import React from 'react';
import { Link } from 'react-router-dom';

function Seguridad() {
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
        <li>1. Seguridad en línea: Evita la urgencia: Los correos electrónicos fraudulentos suelen crear un censo de urgencia y amenazan con suspender tu cuenta. ¡No te dejes intimidar! Revisa el "https": Asegúrate de que la URL del sitio web comienza con "https". Esto indica una conexión segura. Comprueba el remitente: Ten cuidado con los correos electrónicos de remitentes desconocidos.</li>
        <li>
        2. Contraseñas seguras: Utiliza una contraseña única para Hurban Point Combina letras mayúsculas y minúsculas, números y símbolos. Evita usar información personal como tu nombre o fecha de nacimiento. 
        </li>
        <li>
        3. Historial de inicios de sesión: Revisa la ubicación, el dispositivo y la fecha de tus inicios de sesión. Si encuentras actividad sospechosa, cambia tu contraseña de inmediato.
        </li>
        <li>
        4. Autenticación en dos pasos: Agrega una capa adicional de seguridad a tu cuenta. Recibirás un código por SMS que deberás ingresar al iniciar sesión. 
        </li>
        <li>
        5. Tu información personal: Hurban Point se compromete a proteger tu privacidad. La mayoría de tus datos se eliminan al cerrar tu cuenta. Puedes descargar tu archivo de datos personales en cualquier momento. 
        </li>
        <li>
        6. Denunciar mensajes sospechosos: Si recibes un mensaje que te parece extraño, repórtalo a Hurban Point. Ayúdanos a mantener la comunidad segura. 
        </li>
        <li>
        7. Cierre de cuenta: Al cerrar tu cuenta, se eliminan la mayoría de tus datos. Algunos datos se conservan por motivos legales o de seguridad.
        </li>
        <li>
        8. Archivo de datos personales: Descarga tu archivo para obtener una copia de tu información. El archivo incluye tus reservas, mensajes y otros datos.
        </li>
        <li>
        9. Notificaciones de inicio de sesión: Recibe una alerta cuando inicies sesión desde un dispositivo nuevo. Te ayuda a detectar actividad no autorizada.
        </li>
        </ul>
    </div>
    );
}

export default Seguridad;
