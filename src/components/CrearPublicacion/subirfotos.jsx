
export default function Component() {
    return (
      <article className="h-svh w-screen  px-4 py-8 b-g bg-slate-600">
        <br />
        <article className="mb-6 py-2">
          <h1 className="text-3xl font-bold mb-2">CREA TU PUBLICACÓN</h1>
          <br />
          <p className="text-muted-foreground text-center text-2xl">Arrastra y suelta tus fotos favoritas para compartirlas con el mundo.</p>
        </article>
        <article className="flex justify-center items-center">
          <article className="bg-card rounded-lg border border-input p-6 mb-6 w-full max-w-7xl">
            <article>
              <article className="flex flex-col items-center justify-center h-30 border-2 border-dashed py-8 rounded-md">
                <UploadIcon className="w-10 h-10 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">Seleciona las fotografías que deseas subir </p>
              </article>
            </article>
          </article>
        </article>
        
        <article className="flex justify-center items-center px-4">
        <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <article className="bg-card overflow-hidden">
            <img src="../../Fotografias/habitacion.jpg" alt="Foto 1" className="rounded object-cover" />
            <article className="p-4">
              <h3 className="text-lg font-medium mb-1">Foto 1</h3>
              <p className="text-muted-foreground">Esta es la descripción de la foto 1.</p>
            </article>
          </article>
          <article className="bg-card overflow-hidden">
            <img src="../../Fotografias/habitacion.jpg" alt="Foto 1" className="rounded object-cover" />
            <article className="p-4">
              <h3 className="text-lg font-medium mb-1">Foto 1</h3>
              <p className="text-muted-foreground">Esta es la descripción de la foto 1.</p>
            </article>
          </article>
          <article className="bg-card overflow-hidden">
            <img src="../../Fotografias/habitacion.jpg" alt="Foto 1" className="rounded object-cover" />
            <article className="p-4">
              <h3 className="text-lg font-medium mb-1">Foto 1</h3>
              <p className="text-muted-foreground">Esta es la descripción de la foto 1.</p>
            </article>
          </article>
          
          
        </article>
        </article>

          
      </article>
    )
  }
  
  function UploadIcon(props) {
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
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
      </svg>
    )
  }