
export default function Component() {
  return (
    <article className="w-full max-w-4xl p-6 sm:p-8 md:p-10 text-black">
      <article className="grid gap-8">
        <article>
          <h1 className="text-3xl font-bold tracking-tight">Servicios del Hotel</h1>
          <article className="grid sm:grid-cols-2 gap-6 mt-6">
            <article className="flex items-start gap-4">
              <WifiIcon className="w-6 h-6 text-primary" />
              <article>
                <h3 className="font-semibold">Wifi gratuito</h3>
                <p className="text-muted-foreground">Conexión a internet de alta velocidad.</p>
              </article>
            </article>
            <article className="flex items-start gap-4">
              <GlassWaterIcon className="w-6 h-6 text-primary" />
              <article>
                <h3 className="font-semibold">Agua potable</h3>
                <p className="text-muted-foreground">Agua limpia y segura para beber.</p>
              </article>
            </article>
            <article className="flex items-start gap-4">
              <PowerIcon className="w-6 h-6 text-primary" />
              <article>
                <h3 className="font-semibold">Electricidad</h3>
                <p className="text-muted-foreground">Servicio eléctrico las 24 horas.</p>
              </article>
            </article>
            <article className="flex items-start gap-4">
              <FuelIcon className="w-6 h-6 text-primary" />
              <article>
                <h3 className="font-semibold">Gas domiciliario</h3>
                <p className="text-muted-foreground">Servicio de gas para cocinar y calentar.</p>
              </article>
            </article>
            <article className="flex items-start gap-4">
              <BathIcon className="w-6 h-6 text-primary" />
              <article>
                <h3 className="font-semibold">Baño privado</h3>
                <p className="text-muted-foreground">Baño en cada habitación.</p>
              </article>
            </article>
            <article className="flex items-start gap-4">
              <CookingPotIcon className="w-6 h-6 text-primary" />
              <article>
                <h3 className="font-semibold">Cocina en las habitaciones</h3>
                <p className="text-muted-foreground">Facilidades para cocinar.</p>
              </article>
            </article>
            <article className="flex items-start gap-4">
              <WashingMachineIcon className="w-6 h-6 text-primary" />
              <article>
                <h3 className="font-semibold">Servicio de lavandería</h3>
                <p className="text-muted-foreground">Servicio de lavado y planchado.</p>
              </article>
            </article>
            <article className="flex items-start gap-4">
              <DogIcon className="w-6 h-6 text-primary" />
              <article>
                <h3 className="font-semibold">Permiten mascotas</h3>
                <p className="text-muted-foreground">Aceptan animales de compañía.</p>
              </article>
            </article>
            <article className="flex items-start gap-4">
              <BedIcon className="w-6 h-6 text-primary" />
              <article>
                <h3 className="font-semibold">Cama incluida</h3>
                <p className="text-muted-foreground">Habitaciones con cama.</p>
              </article>
            </article>
            <article className="flex items-start gap-4">
              <DoorOpenIcon className="w-6 h-6 text-primary" />
              <article>
                <h3 className="font-semibold">Entrada independiente</h3>
                <p className="text-muted-foreground">Cada habitación tiene su propia entrada.</p>
              </article>
            </article>
            <article className="flex items-start gap-4">
              <BuildingIcon className="w-6 h-6 text-primary" />
              <article>
                <h3 className="font-semibold">Terraza</h3>
                <p className="text-muted-foreground">Áreas exteriores privadas.</p>
              </article>
            </article>
          </article>
        </article>
        <article>
          <h1 className="text-3xl font-bold tracking-tight">Reglas de Alojamiento</h1>
          <article className="grid sm:grid-cols-2 gap-6 mt-6">
            <article className="flex items-start gap-4">
              <ClockIcon className="w-6 h-6 text-primary" />
              <article>
                <h3 className="font-semibold">Hora de llegada</h3>
                <p className="text-muted-foreground">10 PM</p>
              </article>
            </article>
            <article className="flex items-start gap-4">
              <CigaretteIcon className="w-6 h-6 text-primary" />
              <article>
                <h3 className="font-semibold">Prohibido fumar</h3>
                <p className="text-muted-foreground">No se permite fumar en las instalaciones.</p>
              </article>
            </article>
            <article className="flex items-start gap-4">
              <PartyPopperIcon className="w-6 h-6 text-primary" />
              <article>
                <h3 className="font-semibold">No se permiten fiestas</h3>
                <p className="text-muted-foreground">Queda prohibido realizar fiestas.</p>
              </article>
            </article>
          </article>
        </article>
      </article>
    </article>
  )
}

function BathIcon(props) {
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
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
      <line x1="10" x2="8" y1="5" y2="7" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="7" x2="7" y1="19" y2="21" />
      <line x1="17" x2="17" y1="19" y2="21" />
    </svg>
  )
}


function BedIcon(props) {
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
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  )
}


function BuildingIcon(props) {
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
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}


function CigaretteIcon(props) {
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
      <path d="M18 12H2v4h16" />
      <path d="M22 12v4" />
      <path d="M7 12v4" />
      <path d="M18 8c0-2.5-2-2.5-2-5" />
      <path d="M22 8c0-2.5-2-2.5-2-5" />
    </svg>
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


function CookingPotIcon(props) {
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
      <path d="M2 12h20" />
      <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" />
      <path d="m4 8 16-4" />
      <path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" />
    </svg>
  )
}


function DogIcon(props) {
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
      <path d="M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5" />
      <path d="M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" />
      <path d="M8 14v.5" />
      <path d="M16 14v.5" />
      <path d="M11.25 16.25h1.5L12 17l-.75-.75Z" />
      <path d="M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306" />
    </svg>
  )
}


function DoorOpenIcon(props) {
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
      <path d="M13 4h3a2 2 0 0 1 2 2v14" />
      <path d="M2 20h3" />
      <path d="M13 20h9" />
      <path d="M10 12v.01" />
      <path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z" />
    </svg>
  )
}


function FuelIcon(props) {
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
      <line x1="3" x2="15" y1="22" y2="22" />
      <line x1="4" x2="14" y1="9" y2="9" />
      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
    </svg>
  )
}


function GlassWaterIcon(props) {
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
      <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </svg>
  )
}


function PartyPopperIcon(props) {
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
      <path d="M5.8 11.3 2 22l10.7-3.79" />
      <path d="M4 3h.01" />
      <path d="M22 8h.01" />
      <path d="M15 2h.01" />
      <path d="M22 20h.01" />
      <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
      <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" />
      <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" />
      <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
    </svg>
  )
}


function PowerIcon(props) {
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
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}


function WashingMachineIcon(props) {
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
      <path d="M3 6h3" />
      <path d="M17 6h.01" />
      <rect width="18" height="20" x="3" y="2" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
    </svg>
  )
}


function WifiIcon(props) {
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
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  )
}