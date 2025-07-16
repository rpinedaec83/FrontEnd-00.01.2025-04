import { useState } from 'react'
import Catalogo from './components/Catalogo'
import './App.css'

function App() {
  const productos= [
    { nombre: 'Teclado Inalámbrico', descripcion: 'Preciso y ergonómico', precio: '139'},
    { nombre: 'Laptop', descripcion: 'Rápida y liviana', precio: '399'},
    { nombre: 'Auriculares', descripcion: 'Con cancelación de ruido', precio: '156'}
  ];

  return (
  <div>
    <h1>Catálogo de productos</h1>
    <Catalogo productos={productos}/>
    </div>
  )
}

export default App
