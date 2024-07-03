
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/header/headerlg';
import SearchBar from './pages/Barra_busqueda/busqueda';
import Landing from './pages/LADING/landing';
import Iniciosesion from './pages/inicio_sesion/iniciosesion';
import Registrarse from './pages/inicio_sesion/registrarse';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Header/>}>
          <Route path="/" element={<Landing/>} />
          <Route path="iniciosesion" element={<Iniciosesion />} />
          <Route path="registrarse" element={<Registrarse />} />
          <Route path="*" element={<Landing/>} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
