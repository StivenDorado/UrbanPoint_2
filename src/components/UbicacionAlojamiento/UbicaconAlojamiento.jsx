export default function Component() {
    return (
      <div className="w-full max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
        <div className="grid gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">CREA UNA PUBLICACIÓN</h2>
            <div className="mb-4">
              <p className="text-muted-foreground">Ubica tu alojamiento</p>
              <div className="grid grid-cols-3 gap-4 mt-2">
                <input type="text" placeholder="Barrio" className="p-2 border rounded" />
                <input type="text" placeholder="Calle" className="p-2 border rounded" />
                <input type="text" placeholder="Número" className="p-2 border rounded" />
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground">Información adicional (opcional)</p>
                <textarea placeholder="Escribe aquí cualquier información adicional" className="mt-2 p-2 border rounded w-full" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Selecciona ubicación en el mapa</h2>
            <div className="h-[400px] bg-gray-400 rounded-lg overflow-hidden">
              <div />
            </div>
            <div className="mt-4 text-right">
              <button className="px-4 py-2 bg-gray-500 text-white rounded">Continúa</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  