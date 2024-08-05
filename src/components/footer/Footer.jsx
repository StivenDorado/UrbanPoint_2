// src/components/footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const footerItems = [
  {
    title: 'Asistencia',
    links: [
     
      { label: <Link to="/centro"> Centro de ayuda, </Link>},
     
      { label: 'SofPoint', url: '/sofpoint' },
      { label: 'Antidiscriminación', url: '/anti-discrimination' },
      { label: 'Opciones de cancelación', url: '/cancellation-options' },
    ],
  },
  {
    title: 'Modo anfitrión',
    links: [
      { label: 'Pon tu espacio en Urban Point', url: '/list-your-space' },
      { label: 'SafPoint para arrendadores', url: '/safpoint-for-hosts' },
      { label: 'Recursos para arrendadores', url: '/host-resources' },
      { label: 'Foro comunitario', url: '/community-forum' },
      { label: 'Arrendador con responsabilidad', url: '/responsible-hosting' },
    ],
  },
  {
    title: 'Urban Point',
    links: [
      { label: 'Sala de prensa', url: '/press-room' },
      { label: 'Funciones nuevas', url: '/new-features' },
      { label: 'Inversionistas', url: '/investors' },
    ],
  },
];

const Footer = () => {
  return (
    <div>
    <footer className="bg-gray-600 p-4  gap-4 text-center">
      {/* Custom Footer Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {footerItems.map((item, index) => (
          <div key={index}>
            <h4 className="text-gray-700 font-bold mb-2">{item.title}</h4>
            <ul>
              {item.links.map((link, linkIndex) => (
                <li key={linkIndex} className="text-black hover:underline mb-2">
                  <a href={link.url} className="text-black">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      
    </footer>
    {/* Original Footer Content */}
    <div className="container bg-gray-400 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="text-sm text-black ml-auto">&copy; 2024 UrbanPoint. All rights reserved.</div>
        <div className="flex items-center justify-center gap-4 text-sm">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center gap-2">
            
            <select className="text-sm">
              <option value="en">English</option>
              <option value="es-CO">Español (Colombia)</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <img src="/currency-icon.svg" alt="Currency Icon" className="w-5 h-5 text-black" />
            <select className="text-sm">
              <option value="USD">USD</option>
              <option value="COP">COP</option>
            </select>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 justify-end">
              <img src="/urbanpoint-logo.svg" alt="UrbanPoint Logo" className="object-contain" width="100" height="40" />
              <div className="flex items-center gap-2">
                <button className="border-transparent text-black hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </button>
                <button className="border-transparent text-black hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="4" />
                    <line x1="21.17" y1="8" x2="12" y2="8" />
                    <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
                    <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
                  </svg>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
