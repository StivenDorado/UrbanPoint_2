export default function Component() {
  return (
    <article className="mx-auto justify-center grid md:grid-cols-2 gap-6 py-4 px-12 ">
      <article className="rounded-lg h-100 bg-slate-600">
        <img
          src="/placeholder.svg"
          alt=""
          height={600}
          className="w-full h-full"
        />
      </article>
      <article className="gap-6">
        <article className="rounded-lg h-70 bg-slate-600">
          <img
            src="/placeholder.svg"
            alt=""
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        </article>
        <br />
        <article className="rounded-lg flex items-center justify-center h-60 bg-slate-600">
          <MapIcon className="w-12 h-12" />
        </article>
      </article>
    </article>
  )
}

function MapIcon(props) {
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
      <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
      <path d="M15 5.764v15" />
      <path d="M9 3.236v15" />
    </svg>
  )
}
