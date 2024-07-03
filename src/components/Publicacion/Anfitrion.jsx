export default function Component() {
    return (
      <article className="flex items-center gap-4 p-4 bg-100 rounded-lg shadow-sm">
        <article className="h-16 w-16 bg-muted rounded-full flex items-center justify-center">
          <img src="/placeholder-user.jpg" alt="Avatar" className="rounded-full h-full w-full object-cover" />
        </article>
        <article className="./public/ME.jpg">
          <article className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Anfitrión: </h3>
          </article>
          <article className="text-sm text-muted-foreground">Miembro desde: Junio 2021</article>
        </article>
      </article>
    )
  }
  