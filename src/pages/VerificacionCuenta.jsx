import React, { useState, useEffect } from 'react';
import { useTable } from 'react-table';
import BarraSuperior from "../components/BarraSuperior";

// Datos de ejemplo
const initialData = [
    { id: '1054871309', nombres: 'Adriana María', apellidos: 'Acosta Gómez', noCuenta: '#XXXXAA', fechaIngreso: '07/02/24', ingresoContrato: '09/07/24', verificada: false },
    { id: '1065462638', nombres: 'Alejandro Andrés', apellidos: 'Aguirre López', noCuenta: '#XXXXAA', fechaIngreso: '07/02/24', ingresoContrato: '09/07/24', verificada: false },
    { id: '106516584', nombres: 'Ana Sofía', apellidos: 'Alarcón Martínez', noCuenta: '#XXXXAA', fechaIngreso: '07/02/24', ingresoContrato: '09/07/24', verificada: false },
    { id: '106192751', nombres: 'Andrés Felipe', apellidos: 'Alvarado Ramírez', noCuenta: '#XXXXAA', fechaIngreso: '07/02/24', ingresoContrato: '09/07/24', verificada: false },
    { id: '1054856465', nombres: 'Carlos Andrés', apellidos: 'Amaya Vargas', noCuenta: '#XXXXAA', fechaIngreso: '07/02/24', ingresoContrato: '09/07/24', verificada: false },
    { id: '1092837495', nombres: 'Carolina Adriana', apellidos: 'Amezquita Ríos', noCuenta: '#XXXXAA', fechaIngreso: '07/02/24', ingresoContrato: '09/07/24', verificada: false },
    { id: '1039573458', nombres: 'Catalina Antonia', apellidos: 'Arango Herrera', noCuenta: '#XXXXAA', fechaIngreso: '07/02/24', ingresoContrato: '09/07/24', verificada: false },
    { id: '1092374722', nombres: 'Claudia Patricia', apellidos: 'Arboleda Mendoza', noCuenta: '#XXXXAA', fechaIngreso: '07/02/24', ingresoContrato: '09/07/24', verificada: false },
    { id: '1028395958', nombres: 'Daniel Alejandro', apellidos: 'Ariza Gutierres', noCuenta: '#XXXXAA', fechaIngreso: '07/02/24', ingresoContrato: '09/07/24', verificada: false }
];

const VerificacionCuenta = () => {
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem('verificationData');
        return savedData ? JSON.parse(savedData) : initialData;
    });

    useEffect(() => {
        localStorage.setItem('verificationData', JSON.stringify(data));
    }, [data]);

    const handleCheckboxChange = (id) => {
        const newData = data.map(row => {
            if (row.id === id) {
                return { ...row, verificada: !row.verificada };
            }
            return row;
        });
        setData(newData);
    };

    const columns = React.useMemo(
        () => [
            { Header: 'Verificada', accessor: 'verificada', Cell: ({ row }) => (
                <input
                    type="checkbox"
                    checked={row.original.verificada}
                    onChange={() => handleCheckboxChange(row.original.id)}
                />
            ) },
            { Header: 'ID', accessor: 'id' },
            { Header: 'Nombres', accessor: 'nombres' },
            { Header: 'Apellidos', accessor: 'apellidos' },
            { Header: 'No. de Cuenta', accessor: 'noCuenta' },
            { Header: 'Fecha de Ingreso', accessor: 'fechaIngreso' },
            { Header: 'Ingreso de Contrato', accessor: 'ingresoContrato' }
        ],
        [data]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data });

    return (
        <div>
            <BarraSuperior title="Verificacion de cuentas" />
            <div className="p-4 mt-16 ml-64">
                <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
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

export default VerificacionCuenta;
