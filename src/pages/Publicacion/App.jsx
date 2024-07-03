import './App.css'


//RUTAS
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HeaderFotos from '../../components/Publicacion/HeaderFotos';
import SeccionFotos from '../../components/Publicacion/SeccionFotos';
import Ofrecer from '../../components/Publicacion/OfrecerReserva';
import Info from '../../components/Publicacion/Infopublicacion';



function App() {
  return (

    <>
    <h2 className='text-center font-bold text-2xl mt-4'>Infomación Habitación</h2>
    <HeaderFotos/>
    <SeccionFotos/>
      <br />
    <article class="Flex">
        <Info/>
        <article>
            <Ofrecer/>
        </article>
    </article>
      <br />



    <BrowserRouter>
        <nav>
          <ul>
            <li>
              
            </li>
          </ul>
        </nav>  
      


      <Routes>
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;