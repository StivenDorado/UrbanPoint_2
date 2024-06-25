import React from 'react';

export default function Component() {
  return (
    <article className="bg-background text-foreground rounded-lg shadow-md overflow-hidden w-full max-w-2xl flex">
      <article className="flex items-center gap-4 p-4 border-r">
        <article className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
          <img src="../../ME.jpg" alt="User" className="w-full h-full rounded-full object-cover" />
          <article className="hidden">JD</article>
        </article>
        <article>
          <article className="font-medium">Muriel</article>
          <article className="text-muted-foreground text-sm">Información</article>
        </article>
      </article>
      <article className="flex-1 border-r">
        <article className="grid grid-cols-2 p-4  gap-y-4">
          <article className="space-y-1">
            <article className="text-sm text-muted-foreground">Fecha de solicitud</article>
            <article>25 de junio de 2024</article>
            <article className="text-sm text-muted-foreground">Hora de la cita</article>
            <article>10:30 AM</article>
          </article>
          <article className="flex items-center justify-end">
            <article className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-primary-foreground">
              <ClockIcon className="w-5 h-5" />
            </article>
          </article>
        </article>
      </article>
      <article className="p-4 space-y-4 flex flex-col justify-center">
        <button
          className="w-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground border border-current py-2 rounded"
        >
          ACEPTAR
        </button>
        <button className="w-full border border-current py-2 rounded">
          RECHAZAR
        </button>
      </article>
    </article>
  )
}

function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
