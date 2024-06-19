import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/headerlg';
import InicioSesion from './pages/inicio_sesion/iniciosesion'; // Ajusta la ruta de importación según la estructura de tu proyecto
import Registro from './pages/inicio_sesion/registrarse'; // Ajusta la ruta de importación según la estructura de tu proyecto

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/iniciosesion" element={<InicioSesion />} />
          <Route path="/registro" element={<Registro />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
