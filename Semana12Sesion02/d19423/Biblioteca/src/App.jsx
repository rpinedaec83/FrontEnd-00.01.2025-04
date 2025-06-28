import { useState } from 'react'
import Biblioteca from './components/Biblioteca'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Biblioteca/>
    </div>
    </>
  )
}

export default App
