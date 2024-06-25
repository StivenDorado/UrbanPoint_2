export default function Component() {
    return (
      <div className="min-h-screen bg-gray-800">
        <header className="bg-gray-300 p-4 flex justify-between items-center">
          <button className="text-lg border border-transparent hover:border-gray-500 rounded-lg px-3 py-1">
            Logo UrbanPoint
          </button>
          <div className="flex space-x-4">
            <button className="border border-transparent hover:border-gray-500 rounded-lg px-3 py-1">Inicia sesión</button>
            <button className="border border-transparent hover:border-gray-500 rounded-lg px-3 py-1">Regístrate</button>
          </div>
        </header>
        <section className="bg-gray-200 p-4">
          <div className="flex items-center space-x-4 bg-white p-2 rounded-md shadow-md">
            <button className="border border-transparent hover:border-gray-100 rounded-lg px-3 py-1 flex items-center space-x-2">
              <span>Fecha de Entrada</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4" />
                <path d="M16 2v4" />
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M3 10h18" />
              </svg>
            </button>
            <input type="text" placeholder="¿En qué barrio quieres vivir?" className="flex-1 border border-gray-300 rounded-lg p-2" />
            <button className="border border-transparent hover:border-gray-500 rounded-lg px-3 py-1 flex items-center space-x-2">
              <span>Filtros</span>
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l-7-7 3-3 7 7-3 3z" />
                <path d="M7 7l7 7-3 3-7-7 3-3z" />
              </svg>
            </button>
            <button className="border border-transparent hover:border-gray-500 rounded-lg px-3 py-1">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>
        </section>
        <section className="p-4 grid grid-cols-3 gap-4">
          <div className="bg-gray-300 h-24 rounded-md" />
          <div className="bg-gray-300 h-24 rounded-md" />
          <div className="bg-gray-300 h-24 rounded-md" />
        </section>
        <section className="p-4 grid grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="p-4">
              <div className="bg-gray-300 h-48 rounded-md relative">
                <button className="bg-transparent absolute top-1 right-2 rounded-lg px-1 py-1">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </button>
              </div>
              <div className="mt-4 ">
                <h3 className="justify-start text-left text-lg font-semibold px-1 py-1">San Eduardo</h3>
                <div className="flex items-center space-x-1 px-12 py-1">
                  <span>0.0</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <p className="text-xs text-gray-500">Disponible des de 11-20 sep</p>
                <p className="text-lg font-bold">$ 250,000.00 COP Mes</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
  