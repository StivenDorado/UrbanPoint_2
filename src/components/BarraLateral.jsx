import { Link } from "react-router-dom";

const BarraLateral = () =>{
    return(
        <nav className="bg-gray-500 h-screen p-4 text-white w-64 fixed top-0 left-0 z-10">
            <ul className="space-y-4 mt-16">
                <li>
                    <Link to="/">Perfil Administradores</Link>
                </li>
                <li>
                    <Link to="/verificacionCuenta">verificacion de Cuenta</Link>
                    </li>
                    <li>
                        <Link to="/Contratos">Administracion de Contratos</Link>
                        </li>
                        <li>
                            <Link to="/Publicaciones">
                            Gestion de Publicaciones</Link>
                        </li>
                        <li>
                            <Link to="/Incidentes">Gestion de Incidentes</Link>
                        </li>
            </ul>
        </nav>
    );
};

export default BarraLateral;