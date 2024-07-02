import React, { useState, useEffect } from 'react';
import BarraSuperior from '../../components/Perfil/BarraSuperior';

const Perfil = () => {
  const [profile, setProfile] = useState({
    name: '',
    lastName: '',
    phone: '+57',
    email: '',
    documentType: '',
    documentNumber: '',
  });
  const [isEditable, setIsEditable] = useState(true);

  // Cargar los datos del perfil desde localStorage al montar el componente
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('profile'));
    if (savedProfile) {
      setProfile(savedProfile);
      setIsEditable(false); // Si hay datos guardados, iniciar en modo no editable
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Permitir solo números y el prefijo internacional
      if (/^\+?\d*$/.test(value)) {
        setProfile({ ...profile, [name]: value });
      }
    } else if (name === 'documentNumber') {
      // Permitir solo números para el número de documento
      if (/^\d*$/.test(value)) {
        setProfile({ ...profile, [name]: value });
      }
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  const handleSave = () => {
    localStorage.setItem('profile', JSON.stringify(profile));
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  return (
    <section>
      <BarraSuperior title="Perfil" />
      <div className="p-4 mt-16 md:ml-16">
        <h1 className="text-2xl font-bold">Administradores</h1>
        <div className="bg-white rounded-lg shadow-md p-4 max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold">Nombre Legal</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Nombres</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputChange}
                disabled={!isEditable}
                className={`w-full px-3 py-2 border rounded ${!isEditable ? 'bg-gray-100' : ''}`}
              />
            </div>
            <div>
              <label className="block text-gray-700">Apellidos</label>
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleInputChange}
                disabled={!isEditable}
                className={`w-full px-3 py-2 border rounded ${!isEditable ? 'bg-gray-100' : ''}`}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Números de Teléfono</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">+57</span>
              <input
                type="text"
                name="phone"
                value={profile.phone.startsWith('+57') ? profile.phone.replace('+57', '') : profile.phone}
                onChange={handleInputChange}
                disabled={!isEditable}
                className={`w-full px-3 py-2 border rounded-r ${!isEditable ? 'bg-gray-100' : ''}`}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              disabled={!isEditable}
              className={`w-full px-3 py-2 border rounded ${!isEditable ? 'bg-gray-100' : ''}`}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Tipo de Documento</label>
            <select
              name="documentType"
              value={profile.documentType}
              onChange={handleInputChange}
              disabled={!isEditable}
              className={`w-full px-3 py-2 border rounded ${!isEditable ? 'bg-gray-100' : ''}`}
            >
              <option value="">Seleccione</option>
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="TI">Tarjeta de Identidad</option>
              <option value="CE">Cédula de Extranjería</option>
              <option value="PA">Pasaporte</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Número de Documento</label>
            <input
              type="text"
              name="documentNumber"
              value={profile.documentNumber}
              onChange={handleInputChange}
              disabled={!isEditable}
              className={`w-full px-3 py-2 border rounded ${!isEditable ? 'bg-gray-100' : ''}`}
            />
          </div>
          <div className="mt-4 text-center">
            {isEditable ? (
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Guardar
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Editar
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perfil;
