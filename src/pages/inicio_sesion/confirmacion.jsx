import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function codigo() {
  return (
    <div className="flex flex-col items-center justify-center h-screen"> 
      <div>
        <h1 className="text-2xl font-bold text-center mb-2">Más Opciones</h1>
        <p className="text-muted-foreground text-center mb-6"> 
          Elige otra forma de recibir el código de verificación con el número +57 311..
        </p>
        <div className="space-y-4">
          <div className="flex items-center">
            <input type="radio" name="verification" value="sms" id="sms" className="peer sr-only" />
            <label
              htmlFor="sms"
              className="flex items-center justify-between w-full rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-checked:border-primary cursor-pointer"
            >
              <div>
                <p className="font-medium">Mensaje de texto (SMS)</p>
                <p className="text-muted-foreground text-sm">
                  Te enviaremos un código a través de un mensaje de texto.
                </p>
              </div>
            </label>
          </div>
          <div className="flex items-center">
            <input type="radio" name="verification" value="whatsapp" id="whatsapp" className="peer sr-only" />
            <label
              htmlFor="whatsapp"
              className="flex items-center justify-between w-full rounded-md border-2 border-primary bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-checked:border-primary cursor-pointer"
            >
              <div>
                <p className="font-medium">WhatsApp</p>
                <p className="text-muted-foreground text-sm">Te vamos a enviar un código a través de wifi.</p>
              </div>
            </label>
          </div>
          <div className="flex items-center">
            <input type="radio" name="verification" value="call" id="call" className="peer sr-only" />
            <label
              htmlFor="call"
              className="flex items-center justify-between w-full rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-checked:border-primary cursor-pointer"
            >
              <div>
                <p className="font-medium">Llamada telefónica</p>
                <p className="text-muted-foreground text-sm">Te vamos a llamar para darte un código.</p>
              </div>
            </label>
          </div>
          <br />
          <button className="flex items-center mx-auto mt-6 bg-blue-500 text-white p-2 rounded">Enviar Código</button>
        </div>
        
      </div>
    </div>
    
  );
}
