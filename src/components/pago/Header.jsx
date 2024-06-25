// src/components/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ title }) => {
    const navigate = useNavigate();

    return (
    <div className="flex items-center p-4 bg-gray-100 border-b border-gray-300">
        <button
        className="mr-4"
        onClick={() => navigate(-1)} // Regresar a la página anterior
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
            />
        </svg>
        </button>
        <h1 className="text-2xl font-bold">{title}</h1>
    </div>
    );
};

export default Header;
