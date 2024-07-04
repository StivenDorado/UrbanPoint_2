import { Link } from 'react-router-dom';
import Footer from '../footer/Footer';

export default function Component() {
    return (
      <article className="flex">
        <article className="grid gap-4 mt-3 mr-20 order-2 md:order-1 rounded-lg border border-radius px-6 py-4 ">
            <article className="hidden md:flex items-start">
              <article className="grid gap-4">
                <h1 className="font-bold text-3xl text-left text-black">Habitación</h1>
                <article className="flex items-center gap-4 text-black">
                  <article className="flex items-center gap-0.5 text-black">
                    <svg className="w-5 h-5 fill-current text-primary" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg className="w-5 h-5 fill-current text-primary " viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg className="w-5 h-5 fill-current text-primary" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg className="w-5 h-5 fill-current text-muted stroke-current text-muted-foreground" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <svg className="w-5 h-5 fill-current text-muted stroke-current text-muted-foreground" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </article>
                  <article className="text-sm text-muted-foreground text-left ">4.93 (45 reseñas)</article>
                </article>
                <article>
                  <p className="text-left text-black">
                    Habitacion hubicada en La Paz
                  </p>
                </article>
              </article>
              <article className="text-4xl font-bold ml-auto">$400</article>
            </article>
            <article className="grid gap-4 md:gap-10">
              <article className="grid gap-2 text-left">
                <label htmlFor="dates" className="text-base text-black">
                  Fechas
                </label>
                <article className="flex justify-center gap-4">
                  <article className="relative">
                    <button className="border border-gray-300 rounded-lg px-1 py-2 text-left">
                      <span className="font-semibold uppercase px-1 py-1 text-[0.65rem]">Entrada</span>
                      <span className="font-normal px-1 py-1">4/2/2024</span>
                    </button>
                    {/* Contenido del popover (Calendar) se omite en HTML estándar */}
                  </article>
                  <article className="relative">
                    <button className="border border-gray-300 rounded-lg px-1 py-2 w-full text-left">
                      <span className="font-semibold uppercase text-[0.65rem] px-1 py-1">Salida</span>
                      <span className="font-normal px-1 py-1">10/2/2024</span>
                    </button>
                    {/* Contenido del popover (Calendar) se omite en HTML estándar */}
                  </article>
                </article>
              </article>
              <article className="grid gap-2">
                <label htmlFor="guests" className="text-base text-black">
                  Huéspedes
                </label>
                <article className="relative">
                  <button className="border border-gray-300 rounded-lg px-3 py-2 w-full text-left">
                    <span className="font-normal">2 Húespedes</span>
                  </button>
                  {/* Contenido del select se omite en HTML estándar */}
                </article>
              </article>
              <article className="flex flex-col gap-2">
                
                <button className="bg-primary hover:bg-primary-hover text-white rounded-lg px-4 py-3 w-full">
                  RESERVAR
                </button>
                <Link to="/ConfirmaYPaga">
                <button className="border border-primary text-primary hover:bg-primary-hover hover:text-white rounded-lg px-4 py-3 w-full">
                  OFRECER PRECIO
                </button>
                </Link>
              </article>
            </article>
          </article>
          
      </article>
      
    );
  }
  