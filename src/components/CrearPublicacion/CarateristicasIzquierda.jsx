
export default function Component() {
    return (
      <article className="grid gap-6 max-w-xl  px-4 py-8">
        <article>
          <label className="font-medium">Tipo de propiedad</label>
          <article className="grid grid-cols-3 gap-4 mt-2">
            <article>
              <input type="radio" id="apartment" name="propertyType" value="apartment" className="sr-only" />
              <label
                htmlFor="apartment"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-3 h-6 w-6"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Apartamento
              </label>
            </article>
            <article>
              <input type="radio" id="house" name="propertyType" value="house" className="sr-only" />
              <label
                htmlFor="house"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-3 h-6 w-6"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Casa
              </label>
            </article>
            <article>
              <input type="radio" id="room" name="propertyType" value="room" className="sr-only" />
              <label
                htmlFor="room"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-3 h-6 w-6"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Habitación
              </label>
            </article>
          </article>
        </article>
        <article>
          <label className="font-medium">Tamaño de la propiedad</label>
          <article className="grid grid-cols-2 gap-4 mt-2">
            <article>
              <label htmlFor="bedrooms">Dormitorios</label>
              <select id="bedrooms" className="w-full">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </article>
            <article>
              <label htmlFor="bathrooms">Baños</label>
              <select id="bathrooms" className="w-full">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </article>
          </article>
        </article>
        <article>
          <label className="font-medium">Características</label>
          <article className="grid grid-cols-2 gap-4 mt-2">
            <article className="flex items-center gap-2">
              <input type="checkbox" id="independent-entrance" name="features" />
              <label htmlFor="independent-entrance" className="text-sm">
                Entrada independiente
              </label>
            </article>
            <article className="flex items-center gap-2">
              <input type="checkbox" id="family-home" name="features" />
              <label htmlFor="family-home" className="text-sm">
                Casa de familia
              </label>
            </article>
            <article className="flex items-center gap-2">
              <input type="checkbox" id="parking" name="features" />
              <label htmlFor="parking" className="text-sm">
                Área de estacionamiento
              </label>
            </article>
            <article className="flex items-center gap-2">
              <input type="checkbox" id="restaurant" name="features" />
              <label htmlFor="restaurant" className="text-sm">
                Restaurante en el lugar
              </label>
            </article>
            <article className="flex items-center gap-2">
              <input type="checkbox" id="pets" name="features" />
              <label htmlFor="pets" className="text-sm">
                Se permiten mascotas
              </label>
            </article>
          </article>
        </article>
        
      </article>
    );
  }
  