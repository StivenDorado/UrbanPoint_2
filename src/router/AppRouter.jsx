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
      </Route>
     </Routes>
    </>
    );
};