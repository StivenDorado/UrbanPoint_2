/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pYYdbMUYma3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
    return (
      <article className="bg-muted p-6 rounded-lg">
        <article className="flex justify-between mb-4">
          <span>Cobro mensual</span>
          <span className="font-medium">$0.00</span>
        </article>
        <article className="flex justify-between mb-4">
          <span>Cobro de servicios</span>
          <span className="font-medium">$0.00</span>
        </article>
        <article className="flex justify-between mb-4">
          <span>Costo de servicios de la app</span>
          <span className="font-medium">$0.09</span>
        </article>
        <hr className="my-4" />
        <article className="flex justify-between">
          <span className="font-medium">Total de costo</span>
          <span className="font-medium">$0.09</span>
        </article>
      </article>
    )
  }