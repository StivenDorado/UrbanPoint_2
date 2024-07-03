/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GT0bS85GZFR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <article className="grid gap-8 max-w-2xl mx-auto p-4 md:p-8">
      <article className="grid gap-2">
        <h2 className="text-2xl font-semibold text-left">SERVICIOS INCLUIDOS</h2>
        <article className="grid sm:grid-cols-2 gap-4">
          <article className="flex items-center gap-2">
            <input type="checkbox" id="wifi" name="services" />
            <label htmlFor="wifi">Wifi</label>
          </article>
          <article className="flex items-center gap-2">
            <input type="checkbox" id="electricity" name="services" />
            <label htmlFor="electricity">Energía</label>
          </article>
          <article className="flex items-center gap-2">
            <input type="checkbox" id="tv" name="services" />
            <label htmlFor="tv">TV</label>
          </article>
          <article className="flex items-center gap-2">
            <input type="checkbox" id="Garaje" name="services" />
            <label htmlFor="Garaje">Garaje</label>
          </article>
          <article className="flex items-center gap-2">
            <input type="checkbox" id="kitchen" name="services" />
            <label htmlFor="kitchen">Cocina</label>
          </article>
          <article className="flex items-center gap-2">
            <input type="checkbox" id="water" name="services" />
            <label htmlFor="water">Agua</label>
          </article>
          <article className="flex items-center gap-2">
            <input type="checkbox" id="washer" name="services" />
            <label htmlFor="washer">Lavadora</label>
          </article>
          <article className="flex items-center gap-2">
            <input type="checkbox" id="fridge" name="services" />
            <label htmlFor="fridge">Nevera</label>
          </article>
          <article className="flex items-center gap-2">
            <input type="checkbox" id="gas" name="services" />
            <label htmlFor="gas">Gas</label>
          </article>
        </article>
      </article>
      <article className="grid gap-2">
        <h2 className="text-2xl font-semibold text-left">DURACIÓN DE ESTANCIA</h2>
        <article className="grid sm:grid-cols-2 gap-4">
          <article className="flex items-center gap-2 cursor-pointer">
            <input type="radio" id="3-months" name="duration" value="3" />
            <label htmlFor="3-months">3 Meses</label>
          </article>
          <article className="flex items-center gap-2 cursor-pointer">
            <input type="radio" id="6-months" name="duration" value="6" defaultChecked />
            <label htmlFor="6-months">6 Meses</label>
          </article>
          <article className="flex items-center gap-2 cursor-pointer">
            <input type="radio" id="9-months" name="duration" value="6" defaultChecked />
            <label htmlFor="9-months">9 Meses</label>
          </article>
          <article className="flex items-center gap-2 cursor-pointer">
            <input type="radio" id="1-year" name="duration" value="12" />
            <label htmlFor="1-year">1 Año</label>
          </article>
          <article className="flex items-center gap-2 cursor-pointer">
            <input type="radio" id="2-years" name="duration" value="24" />
            <label htmlFor="2-years">2 Años</label>
          </article>
          <article className="col-span-2 flex items-center gap-2">
            <input type="radio" id="custom" name="duration" value="custom" />
            <input id="custom-duration" type="number" min="1" placeholder="Custom duration (months)" />
          </article>
        </article>
      </article>
      <article className="grid gap-2">
        <h2 className="text-2xl font-semibold text-left">GÉNERO</h2>
        <article className="grid sm:grid-cols-3 gap-4">
          <article className="flex items-center gap-2 cursor-pointer">
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">Masculino</label>
          </article>
          <article className="flex items-center gap-2 cursor-pointer">
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">Femenino</label>
          </article>
          <article className="flex items-center gap-2 cursor-pointer">
            <input type="radio" id="other" name="gender" value="other" defaultChecked />
            <label htmlFor="other">Cualquiera</label>
          </article>
        </article>
      </article>
      <article className="grid gap-2">
        <h2 className="text-2xl font-semibold">REGLAS DE ALOJAMIENTO</h2>
        <textarea
          className="w-full h-10 p-2 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Escriba sus reglas aquí..."
        />
      </article>
      
    </article>
    
  );
}

    

