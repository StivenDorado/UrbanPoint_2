import React, { useState, useEffect } from 'react';
import BarraSuperior from "../components/BarraSuperior";

const Publicaciones = () => {
    const [selectedOptions, setSelectedOptions] = useState(() => {
        // Cargar el estado desde localStorage si existe, de lo contrario inicializar con null
        const savedOptions = localStorage.getItem('selectedOptions');
        return savedOptions ? JSON.parse(savedOptions) : Array(6).fill(null);
    });

    useEffect(() => {
        // Guardar el estado en localStorage cada vez que se actualice
        localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
    }, [selectedOptions]);

    const handleCheckboxChange = (index, value) => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[index] = value;
        setSelectedOptions(newSelectedOptions);
    };

    return (
        <div>
            <BarraSuperior title="Gestión de Publicaciones" />
            <div className="p-4 mt-16 ml-64">
                <table className="table-auto w-full mt-4">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Aprobado</th>
                            <th className="px-4 py-2">No Aprobado</th>
                            <th className="px-4 py-2">En Proceso-ID</th>
                            <th className="px-4 py-2">Fecha de Publicación</th>
                            <th className="px-4 py-2">Fecha de Modificación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array(6).fill().map((_, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedOptions[index] === 'aprobado'}
                                        onChange={() => handleCheckboxChange(index, 'aprobado')}
                                    />
                                </td>
                                <td className="border px-4 py-2">
                                    <input
                                        type="checkbox"
                                        checked={selectedOptions[index] === 'no_aprobado'}
                                        onChange={() => handleCheckboxChange(index, 'no_aprobado')}
                                    />
                                </td>
                                <td className="border px-4 py-2">23232343432434</td>
                                <td className="border px-4 py-2">07/01/xxx</td>
                                <td className="border px-4 py-2">87/02/xxx</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Publicaciones;
