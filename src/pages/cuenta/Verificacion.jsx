import React from 'react';
import { Link } from 'react-router-dom';

function Verificación() {
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
        <li>La identidad y la verificación de la cuenta del usuario son los procesos de garantizar que un usuario es quien
dice ser. Esto es importante para proteger los datos y recursos del usuario, así como para prevenir el fraude y el abuso.
</li>
<li>es responsabilidad del aprendiz realizar entrega de la totalidad de la documentación:
Fotocopia del documento de identidad Vigente (Por ambas caras).
Certificado el cual acredita que pertenece a una institucion educativa superior.
foto de perfil del actual año.
</li>
<p>
es responsabilidad del arrendador realizar entrega de la totalidad de la documentación:
</p>
<li>Fotocopia del documento de identidad Vigente (Por ambas caras).
</li>
<li>
documento de libertad y estradicion.
</li>
<li>
foto de perfil del año actual
</li>
<li>
direccion de la residencia que esta en arriendo con una descripcion de la propiedad detallada.
</li>
        </ul>
    </div>
    );
}

export default Verificación;
