import './App.css'
import Footer from '../../components/footer/Footer';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderFotos from '../../components/Publicacion/HeaderFotos';
import SeccionFotos from '../../components/Publicacion/SeccionFotos';
import Ofrecer from '../../components/Publicacion/OfrecerReserva';
import Info from '../../components/Publicacion/Infopublicacion';

function Appubli() {
  return (
    <>
      <h2 className='text-center font-bold text-2xl mt-4 text-black'>Infomación Habitación</h2>
      <HeaderFotos />
      <SeccionFotos />
      <br />
      <article className="Flex">
        <Info />
        <article>
          <Ofrecer />
        </article>
      </article>
      <br />
        <nav>
          <ul>
            <li>{/* Add your navigation items here */}</li>
          </ul>
        </nav>
        <Routes>
          {/* Define your routes here */}
        </Routes>
        <Footer/>
    </>
    
  );
}

export default Appubli;
