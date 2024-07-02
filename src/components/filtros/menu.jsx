import React, { useState } from 'react';

const MenuDesplegable = () => {
  const [estaAbierto, setEstaAbierto] = useState(false);

  const alternarMenu = () => {
    setEstaAbierto(!estaAbierto);
  };

  return (
    <div className="menu-desplegable">
      <button onClick={alternarMenu} className="boton-menu">
        Filtros
      </button>
      {estaAbierto && (
        <div className="menu">
          <a href="#filtro1">Filtro 1</a>
          <a href="#filtro2">Filtro 2</a>
          <a href="#filtro3">Filtro 3</a>
        </div>
      )}
    </div>
  );
};

export default MenuDesplegable;
