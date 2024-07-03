import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/headerlg'
import SearchBar from './components/Barra_busqueda/busqueda'
import Landing from './components/LADING/landing';
import Iniciosesion from './pages/inicio_sesion/iniciosesion';

function App() {
  return (
    <>
    <Router>
    <section>
    <Header/>
    <SearchBar/>
    <Landing/>
    <Routes>
          <Route path="/Iniciosesion" element={<InicioSesion />} />
          <Route path="/registro" element={<Registro />} />
          {/* Agrega más rutas según sea necesario */}
    </Routes>
    </section>
    </Router>
    </>
  );
  
}

export default App;







