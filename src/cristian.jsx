import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import BarraLateral from "./components/BarraLateral";
import VerificacionCuenta from "./pages/VerificacionCuenta";
import PerfilAdmins from "./pages/PerfilAdmins";
import Contratos from "./pages/Contratos";
import Publicaciones from "./pages/Publicaciones";
import Incidentes from "./pages/Incidentes";


const App = () => {
    return(
        <Router>
            <div className="flex">
            <BarraLateral />
            <div className="ml-64 p-4 w-full">
            <Routes>
                <Route path="/" element={<PerfilAdmins />}/>
                <Route path="/verificacionCuenta" element={<VerificacionCuenta />}/>
                <Route path="/Contratos" element={<Contratos />}/>
                <Route path="/Publicaciones" element={<Publicaciones />}/>
                <Route path="/Incidentes" element={<Incidentes />}/>
            </Routes>
            </div>
            </div>
        </Router>
    )
}

export default App;













