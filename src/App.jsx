
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/headerlg';
import SearchBar from './pages/Barra_busqueda/busqueda';
import Landing from './pages/LADING/landing';
import Iniciosesion from './pages/inicio_sesion/iniciosesion';
import Registrarse from './pages/inicio_sesion/registrarse';
import { AppRouter } from './router/AppRouter';

function App() {
  return <AppRouter/>;
}

export default App;
