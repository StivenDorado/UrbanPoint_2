import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import iniciosesion from '../inicio_sesion/iniciosesion';


export default function Component() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <header className="w-full bg-gray-200 p-4 flex justify-between items-center">
        <Button variant="outline">Logo UrbanPoint</Button>
        <div className="flex space-x-4">
          <Link to='../inicio_sesion/iniciosesion' ><Button variant="outline">Inicia sesión</Button></Link>
          <link rel="stylesheet" href="../inicio_sesion/iniciosesion" />
          
          <Button variant="outline">Regístrate</Button>
        </div>
      </header>
      <div className="w-full max-w-4xl p-4 bg-gray-200 rounded-lg flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            Fecha de Entrada
            <CalendarIcon className="ml-2" />
          </Button>
          <Input placeholder="¿En qué barrio quieres vivir?" className="flex-1" />
        </div>
        <Button variant="outline">
          Filtros
          <FilterIcon className="ml-2" />
        </Button>
        <Button variant="outline">
          <SearchIcon />
        </Button>
      </div>
      <div className="w-full max-w-4xl grid grid-cols-3 gap-4">
        <div className="h-24 bg-gray-300 rounded-lg" />
        <div className="h-24 bg-gray-300 rounded-lg" />
        <div className="h-24 bg-gray-300 rounded-lg" />
      </div>
      <div className="w-full max-w-4xl grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>San Eduardo</CardTitle>
                <HeartIcon className="text-gray-500" />
              </div>
              <CardDescription>0.0 ⭐</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-48 bg-gray-400 rounded-lg" />
            </CardContent>
            <CardFooter>
              <div className="flex flex-col space-y-2">
                <span>Disponible desde 11-20 sep</span>
                <span>$ 250,000.00 COP Mes</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}

function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
