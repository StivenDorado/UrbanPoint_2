import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import iniciosesion from './src/pages/inicio_sesion/inicio_sesion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hola Urban Point</h1>
      <iniciosesion/>
    </>
  )
}

export default App
