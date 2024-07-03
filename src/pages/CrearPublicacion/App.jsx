
import './App.css'

//RUTAS
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Regresar from '../../components/CrearPublicacion/Regreasar';
import SubirFotos from '../../components/CrearPublicacion/subirfotos';
import Izquierda1 from '../../components/CrearPublicacion/CarateristicasIzquierda';
import Derecha1 from '../../components/CrearPublicacion/CarateristicasDerecha';
import PrecioTotal  from '../../components/CrearPublicacion/PrecioTotal'
import Publicar from '../../components/CrearPublicacion/Publicar';


function App() {
  return (

    <>
    <Regresar/>
    <SubirFotos/>
    <article class="flex">
      <Izquierda1/>
      <article>
          <Derecha1/>
          <PrecioTotal/>
      </article>
    </article>
    
    <Publicar/>






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