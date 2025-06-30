import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import ListaPerfiles from './components/ListaPerfiles';
import Catalogo from './components/Catalogo';
import Perfil from './components/Perfil';

function App() {
const perfiles = [
  {
    nombre: "Clara",
    rol: "Frontend Developer Jr",
    imagen: "https://images.unsplash.com/photo-1602178856779-d57888ae2f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcmZpbGVzfGVufDB8fDB8fHww"
  },
  {
    nombre: "Santiago",
    rol: "Backend Developer Jr",
    imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyZmlsZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    nombre: "Andrea",
    rol: "UX Designer",
    imagen: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyZmlsZXN8ZW58MHx8MHx8fDA%3D"
  }
];

const productos = [
  {
    nombre: "Laptop",
    descripcion: "Portátil de alto rendimiento",
    precio: 3500,
    imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww"
  },
  {
    nombre: "Mouse",
    descripcion: "Mouse inalámbrico",
    precio: 50,
    imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91c2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    nombre: "Monitor",
    descripcion: "Monitor de 24 pulgadas",
    precio: 750,
    imagen: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"
  }
];

  return (
    <>
      <Header />
      <Card />
      <ListaPerfiles data={perfiles} />
      <Catalogo productos={productos} />
      <Footer />
    </>
  );
}

export default App;