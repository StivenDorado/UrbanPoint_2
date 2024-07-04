import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Header from "../components/header/headerlg";
import Iniciosesion from "../pages/inicio_sesion/iniciosesion";
import Registrarse from "../pages/inicio_sesion/registrarse";  
import Landing from "../pages/LADING/landing";
import SearchBar from "../pages/Barra_busqueda/busqueda";
import Appubli from "../pages/Publicacion/Appubli";
import ConfirmaYPaga from "../pages/pago/ConfirmaYPaga";
import Codigo from "../pages/inicio_sesion/codigo";
import Confirmacion from "../pages/inicio_sesion/confirmacion";
import Centro from "../pages/centro";
import ConsejoBusqueda from "../pages/centroAyuda/Busqueda y reservaciones/ConsejoBusqueda";
import ReservarAlojamiento from "../pages/centroAyuda/Busqueda y reservaciones/ReservarAlojamiento";
import ReservarCitas from "../pages/centroAyuda/Busqueda y reservaciones/ReservarCitas";
import EnviarMensajes from "../pages/centroAyuda/Busqueda y reservaciones/EnviarMensajes";
import TemasSeguridad from "../pages/centroAyuda/seguridad-accesibilidad/TemasSeguridad";
import ProblemasReportes from "../pages/centroAyuda/seguridad-accesibilidad/ProblemasReportes";

import QuienesSomos from "../pages/centroAyuda/acerca de/QuienesSomos";
import Funcionamiento from "../pages/centroAyuda/acerca de/Funcionamiento";
import Reglas from "../pages/centroAyuda/acerca de/Reglas";

import Estado from "../pages/centroAyuda/reservaciones/Estado";
import Cancelaciones from "../pages/centroAyuda/reservaciones/Cancelaciones";
import Problemas from "../pages/centroAyuda/reservaciones/Problemas";

import ComoFunciona from "../pages/centroAyuda/ofertas-contraoferta/ComoFunciona";
import Implementando from "../pages/centroAyuda/ofertas-contraoferta/Implementado";

import Politicas from "../pages/centroAyuda/politicas-reglas/Politicas";
import Incumplimiento from "../pages/centroAyuda/politicas-reglas/Incumplimiento";

export const AppRouter = () => {
    return (
        
    <>
     <Routes>
      <Route path="/"element={<Header />}>
       <Route index element={<Landing />} />
       <Route path="iniciosesion" element={<Iniciosesion />}/>
       <Route path="registrarse" element={<Registrarse />}/>
       <Route path="appubli/*" element={<Appubli />}/>
       <Route path="confirmaypaga" element={<ConfirmaYPaga />}/>
       <Route path="codigo" element={<Codigo />}/>
       <Route path="confirmacion" element={<Confirmacion />}/>
       <Route path="centro" element={<Centro />}/>

       <Route path="consejobusqueda" element={<ConsejoBusqueda />}/>
       <Route path="reservaralojamiento" element={<ReservarAlojamiento />}/>
       <Route path="reservarcitas" element={<ReservarCitas />}/>
       <Route path="enviarmensajes" element={<EnviarMensajes/>}/>

       <Route path="temasseguridad" element={<TemasSeguridad />}/>
       <Route path="problemasreportes" element={<ProblemasReportes />}/>

       <Route path="quienessomos" element={<QuienesSomos/>}/>
       <Route path="funcionamiento" element={<Funcionamiento />}/>
       <Route path="reglas" element={<Reglas />}/>

       <Route path="estado" element={<Estado/>}/>
       <Route path="cancelaciones" element={<Cancelaciones />}/>
       <Route path="problemas" element={<Problemas />}/>

       <Route path="comofunciona" element={<ComoFunciona />}/>
       <Route path="implementando" element={<Implementando />}/>

       <Route path="politicas" element={<Politicas />}/>
       <Route path="incumplimiento" element={<Incumplimiento />}/>
      </Route>
     </Routes>
    </>
    );
};