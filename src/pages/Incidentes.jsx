import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import BarraSuperior from "../components/BarraSuperior";

// Datos de ejemplo
const initialIncidentes = [
    { idReporte: "1054871309", nombre: "Adriana María Acosta Gómez", enProcesoId: "1054871309", incidenteContestando: true },
    { idReporte: "1065462638", nombre: "Alejandro Andrés Aguirre López", enProcesoId: "1065462638", incidenteContestando: false },
    { idReporte: "106516584", nombre: "Ana Sofía Alarcón Martínez", enProcesoId: "106516584", incidenteContestando: true },
    { idReporte: "106192751", nombre: "Andrés Felipe Alvarado Ramírez", enProcesoId: "106192751", incidenteContestando: false },
    { idReporte: "1054856465", nombre: "Carlos Andrés Amaya Vargas", enProcesoId: "1054856465", incidenteContestando: true },
    { idReporte: "1092837495", nombre: "Carolina Adriana Amezquita Ríos", enProcesoId: "1092837495", incidenteContestando: false },
    { idReporte: "1039573458", nombre: "Catalina Antonia Arango Herrera", enProcesoId: "1039573458", incidenteContestando: true },
    { idReporte: "1092374722", nombre: "Claudia Patricia Arboleda Mendoza", enProcesoId: "1092374722", incidenteContestando: false },
];

const Incidentes = () => {
    const [incidentes, setIncidentes] = useState(() => {
        const savedIncidentes = localStorage.getItem('incidentesData');
        return savedIncidentes ? JSON.parse(savedIncidentes) : initialIncidentes;
    });

    useEffect(() => {
        localStorage.setItem('incidentesData', JSON.stringify(incidentes));
    }, [incidentes]);

    const toggleIncidenteContestando = (idReporte) => {
        const newIncidentes = incidentes.map(incidente => {
            if (incidente.idReporte === idReporte) {
                return { ...incidente, incidenteContestando: !incidente.incidenteContestando };
            }
            return incidente;
        });
        setIncidentes(newIncidentes);
    };

    const columns = React.useMemo(
        () => [
            { Header: 'ID-Reporte', accessor: 'idReporte' },
            { Header: 'Nombre Completo', accessor: 'nombre' },
            { Header: 'EN PROCESO-ID', accessor: 'enProcesoId' },
            {
                Header: 'INCIDENTE CONTESTADO',
                accessor: 'incidenteContestando',
                Cell: ({ row }) => (
                    <input
                        type="checkbox"
                        checked={row.original.incidenteContestando}
                        onChange={() => toggleIncidenteContestando(row.original.idReporte)}
                    />
                ),
            },
        ],
        [incidentes]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data: incidentes });

    return (
        <div>
            <BarraSuperior title="Gestión de Incidentes" />
            <div className="p-4 mt-16 ml-64">
                <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-300">
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                        {rows.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map(cell => (
                                        <td
                                            {...cell.getCellProps()}
                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Incidentes;
