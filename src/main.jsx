// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import App from './App.jsx'; // Asegúrate de que la ruta sea correcta
import './index.css';

const root = createRoot(document.getElementById('root')); // Crea el punto de entrada correctamente
root.render(<App />);
