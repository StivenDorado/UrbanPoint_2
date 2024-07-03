export default function Component() {
    return (
      <div className="w-screen py-1 px-4 static">
        <div className="flex items-center justify-between mb-2 mt-2">
          <h2 className="text-2xl font-bold">Reseñas: 0.0 (Calificaciones)</h2>
          <div className="flex items-right gap-4">
            <button className="border rounded-sm px-2 py-1 text-sm flex items-center">
              <ShareIcon className="w-5 h-5" />
            </button>
            <button className="p-1 rounded-full">
              <HeartIcon className="w-5 h-5" />
              <span className="sr-only">Agregar a favoritos</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  function HeartIcon(props) {
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
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    )
  }
  
  function ShareIcon(props) {
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
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" x2="12" y1="2" y2="15" />
      </svg>
    )
  }
  