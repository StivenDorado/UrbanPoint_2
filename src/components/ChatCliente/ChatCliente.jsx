import React from 'react';

export default function Component() {
  return (
    <div className="grid grid-cols-[300px_1fr] max-w-4xl w-full rounded-lg overflow-hidden border">
      <div className="bg-muted/20 p-3 border-r">
        <div className="flex items-center justify-between space-x-4">
          <div className="font-medium text-sm">Mensajes</div>
        </div>
        <br />
        <div className="grid gap-2 border-b border- border-t">
          <a href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50 bg-muted">
            <div className="border w-10 h-10 rounded-full overflow-hidden">
              <img src="../../ME.jpg" alt="User" className="w-full h-full object-cover" />
              <div className="hidden">OM</div>
            </div>
            <div className="grid gap-0.5">
              <p className="text-sm font-medium leading-none">Muriel Esneider</p>
              <p className="text-xs text-muted-foreground">hey, ¿qué tal? &middot; 2h</p>
            </div>
          </a>
        </div>
        <div className="grid gap-2 border-b">
          <a href="#" className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted/50 bg-muted">
            <div className="border w-10 h-10 rounded-full overflow-hidden">
              <img src="../../ME.jpg" alt="User" className="w-full h-full object-cover" />
              <div className="hidden">OM</div>
            </div>
            <div className="grid gap-0.5">
              <p className="text-sm font-medium leading-none">Muriel Esneider</p>
              <p className="text-xs text-muted-foreground">hey, ¿qué tal? &middot; 2h</p>
            </div>
          </a>
        </div>
      </div>
      <div>
        <div className="p-3 flex border-b items-center">
          <div className="flex items-center gap-2">
            <div className="border w-10 h-10 rounded-full overflow-hidden">
              <img src="../../ME.jpg" alt="User" className="w-full h-full object-cover" />
              <div className="hidden">OM</div>
            </div>
            <div className="grid gap-0.5">
              <p className="text-sm font-medium leading-none">Muriel Esneider</p>
              <p className="text-xs text-muted-foreground">Activa hace 2h</p>
            </div>
          </div>
        </div>
        <div className="grid gap-4 p-3">
          <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-primary text-primary-foreground">
            Hey, espero que estés bien! Deberíamos quedar pronto.
          </div>
          <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-full px-4 py-2 text-sm bg-muted">
            ¡Claro! Estoy libre este fin de semana si quieres tomar un café.
          </div>
          <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-full px-4 py-2 text-sm ml-auto bg-primary text-primary-foreground">
            ¡Genial! Nos vemos en el Starbucks de la 5ta Avenida.
          </div>
          <div className="flex w-max max-w-[65%] flex-col gap-2 rounded-full px-4 py-2 text-sm bg-muted">
            Te escribo el sábado.
          </div>
        </div>
        <div className="border-t">
          <form className="flex w-full items-center space-x-2 p-3">
            <input id="message" placeholder="Escribe tu mensaje..." className="flex-1 p-2 border rounded" autoComplete="off" />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-full">
              <span className="sr-only">Enviar</span>
              <SendIcon className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}
