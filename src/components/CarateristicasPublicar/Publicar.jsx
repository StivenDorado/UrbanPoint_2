/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GT0bS85GZFR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <article className="grid md:grid-cols-2 gap-6 p-6">
        <article className="space-y-6 flex flex-col justify-center">
          <article>
            <input
              id="price"
              type="number"
              placeholder="Ingresa el precio deseado"
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder-text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </article>
          <article>
            <select id="guests" className="w-full">
              <option value="">Selecciona la cantidad de huéspedes</option>
              <option value="1">1 huésped</option>
              <option value="2">2 huéspedes</option>
              <option value="3">3 huéspedes</option>
              <option value="4">4 huéspedes</option>
              <option value="5">5 huéspedes</option>
              <option value="6">6 huéspedes</option>
              <option value="7">7 huéspedes</option>
              <option value="8">8 huéspedes</option>
              <option value="9">9 huéspedes</option>
              <option value="10">10 huéspedes</option>
            </select>
          </article>
        </article>
        <article className="flex flex-col items-center justify-center space-y-4">
          <button className="w-full">PUBLICAR</button>
          <button className="w-full">PROGRAMAR PUBLICACIÓN</button>
        </article>
      </article>
    );
  }
  
  