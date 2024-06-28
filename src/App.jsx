import { useState } from 'react'

import './App.css'
import { fromJSON } from 'postcss'

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
