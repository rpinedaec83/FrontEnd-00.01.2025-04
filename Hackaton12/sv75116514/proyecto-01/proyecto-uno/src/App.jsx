import { useState } from 'react'
import Perfil from './components/Perfil'
import ListaPerfiles from './components/ListaPerfiles'
import './App.css'

function App() {
  const perfiles= [{
    nombre: "Pedro",
    rol: "Desarrollador FrontEnd",
    imagen: "https://via.placeholder.com/100"
  },
  {
    nombre: "Juan",
    rol: "Disenador UX/UI",
    imagen:"https://via.placeholder.com/100"
  },
  {
    nombre: "Pablo",
    rol: "Desarrollador BackEnd",
    imagen: "https://via.placeholder.com/100"
  }
  ];

  return (
    <>
      <div style={{width: "1000px"}}>
        <h1>Lista de colaboradores</h1>
        <ListaPerfiles datos={perfiles}/>
      </div>
    </>
  )
}

export default App
