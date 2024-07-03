import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/header/headerlg'
import SearchBar from './components/Barra_busqueda/busqueda'
import Landing from './components/LADING/landing';



function App() {
  return (
    <>
    <Router>
    <section>
    <Header/>
    <SearchBar/>
    <Landing/>
    
    </section>
    </Router>
    </>
  );
  
}

export default App;






