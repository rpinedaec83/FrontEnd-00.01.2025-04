import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import Cita from './components/cita/cita'
import Libro from './components/libro/Libro';

function App() {
  const [count, setCount] = useState(0)
  let comidaFavorita = "Pan con Chicharon"
  return (
    <>
      <div>
        <p className="cls_p">Mi comida favorita es {comidaFavorita}</p>
      </div>
      <h1>Vite + React + Roberto</h1>
      <Cita nombre="David"/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Cita nombre="Juan"></Cita>
      <Libro titulo="Un viaje Fantastico" descripcion="La descripcion del libro"></Libro>

    </>
  )
}

export default App
