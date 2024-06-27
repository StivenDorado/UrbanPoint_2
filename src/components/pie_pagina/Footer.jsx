// src/components/footer.js
import React from 'react';

const footerItems = [
  {
    title: 'Asistencia',
    links: [
      { label: 'Centro de ayuda', url: '/help-center' },
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
    <div className="bg-gray-400 p-4 grid grid-cols-3 gap-4 text-gary-500 text-center">
      {footerItems.map((item, index) => (
        <div key={index}>
          <h4 className="text-gray-700 font-bold mb-2">{item.title}</h4>
          <ul>
            {item.links.map((link, linkIndex) => (
              <li key={linkIndex} className="text-black hover:underline mb-2">
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Footer;
