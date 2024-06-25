// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConfirmaYPaga from './page/pago/ConfirmaYPaga';
import ConfirmacionPago from './page/pago/ConfirmacionPago';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConfirmaYPaga />} />
        <Route path="/confirmacion-pago" element={<ConfirmacionPago />} />
      </Routes>
    </Router>
  );
}

export default App
