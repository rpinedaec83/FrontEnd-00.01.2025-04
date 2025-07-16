import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import ListaPerfiles from './components/ListaPerfiles';
import Catalogo from './components/Catalogo';



const perfilesData = [
  {
    nombre: 'Katty Romero',
    rol: 'Desarrolladora Frontend',
    imagen: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    nombre: 'Lalo Barrientos',
    rol: 'Diseñador UX/UI',
    imagen: 'https://randomuser.me/api/portraits/men/46.jpg'
  },
  {
    nombre: 'Sonia Morales',
    rol: 'Fullstack Developer',
    imagen: 'https://randomuser.me/api/portraits/women/68.jpg'
  },
];

const productosData = [
  {
    nombre: 'Laptop Pro',
    descripcion: 'Laptop de alto rendimiento',
    precio: 12000
  },
  {
    nombre: 'Unicos Auriculares Inalámbricos',
    descripcion: 'Sonido premium sin cables',
    precio: 1500
  },
  {
    nombre: 'Monitor 5K',
    descripcion: 'Resolución ultra alta definición',
    precio: 4000
  },
];



function App() {
  return (
    <>
      <Header />
      <Card />
      <h2>Equipo</h2>
      <ListaPerfiles perfiles={perfilesData} />
      <h2>Catálogo de Productos</h2>
      <Catalogo productos={productosData} />

      <Footer />
    </>
  );
}

export default App;

