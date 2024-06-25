import React from 'react';
import BarraSuperior from "../components/BarraSuperior";

const contratosData = [
    { idContrato: 'R-01343535335', fechaInicial: '07/02/24', fechaCancelacion: '10/02/24', fechaModificacion: '' },
    { idContrato: 'R-01343535335', fechaInicial: '07/02/24', fechaCancelacion: '10/02/24', fechaModificacion: '' },
    { idContrato: 'R-01343535335', fechaInicial: '07/02/24', fechaCancelacion: '10/02/24', fechaModificacion: '' },
    { idContrato: 'R-01343535335', fechaInicial: '07/02/24', fechaCancelacion: '10/02/24', fechaModificacion: '' },
    { idContrato: 'R-01343535335', fechaInicial: '07/02/24', fechaCancelacion: '10/02/24', fechaModificacion: '' },
    { idContrato: 'R-01343535335', fechaInicial: '07/02/24', fechaCancelacion: '10/02/24', fechaModificacion: '' },
    { idContrato: 'R-01343535335', fechaInicial: '07/02/24', fechaCancelacion: '10/02/24', fechaModificacion: '' },
    { idContrato: 'R-01343535335', fechaInicial: '07/02/24', fechaCancelacion: '10/02/24', fechaModificacion: '' },
    { idContrato: 'R-01343535335', fechaInicial: '07/02/24', fechaCancelacion: '10/02/24', fechaModificacion: '' },
    { idContrato: 'R-01343535335', fechaInicial: '07/02/24', fechaCancelacion: '10/02/24', fechaModificacion: '' },
    { idContrato: 'R-01343535335', fechaInicial: '07/02/24', fechaCancelacion: '10/02/24', fechaModificacion: '' }
];

const Contratos = () => {
    return (
        <div>
            <BarraSuperior title="Administracion de Contratos"/>
            <div className="p-4 mt-16 ml-64">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-500">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">ID CONTRATO</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">FECHA INICIAL</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">FECHA DE CANCELACION</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">FECHA DE MODIFICACION</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {contratosData.map((contrato, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contrato.idContrato}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contrato.fechaInicial}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contrato.fechaCancelacion}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contrato.fechaModificacion}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Contratos;
