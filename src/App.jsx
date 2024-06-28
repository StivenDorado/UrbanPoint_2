import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/headerlg';
import SearchBar from './components/Barra_busqueda/busqueda';
import InicioSesion from './pages/inicio_sesion/iniciosesion'; // Ajusta la ruta de importación según la estructura de tu proyecto
import Registro from './pages/inicio_sesion/registrarse'; // Ajusta la ruta de importación según la estructura de tu proyecto
import Landing from './components/LADING/lading';
import Menu from './components/filtros/menu';


function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Header />
        <SearchBar />
        <Landing/>
        <Menu/>
        <Routes>
          <Route path="/iniciosesion" element={<InicioSesion />} />
          <Route path="/registro" element={<Registro />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
    </>
    
  );
}

export default App;



