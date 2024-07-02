import React from 'react';
import BarraSuperior from '../../components/Perfil/BarraSuperior';

const Verificar = () => {
  // Ejemplo de datos simulados (reemplaza esto con tus datos reales)
  const perfiles = [
    { id: 1, name: 'Nombre 1', username: 'usuario1' },
    { id: 2, name: 'Nombre 2', username: 'usuario2' },
    { id: 3, name: 'Nombre 3', username: 'usuario3' },
    // Asegúrate de tener la lista de perfiles o pasársela como prop
  ];

  return (
    <section>
      <BarraSuperior title="Perfil" />
      <div className="p-4 mt-16 md:ml-16">
        <h1 className="text-2xl font-bold">Administradores</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {perfiles.map((perfil) => (
            <div key={perfil.id} className="bg-white rounded-lg shadow-md p-4">
              {/* Aquí puedes cambiar las imágenes de los administradores */}
              <img src="/user.png" alt={`${perfil.name}'s avatar`} className="w-20 h-20 rounded-full mx-auto" />
              <h2 className="text-xl font-bold mt-2 text-center">{perfil.name}</h2>
              <p className="text-gray-600 text-center">{perfil.username}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Verificar;
