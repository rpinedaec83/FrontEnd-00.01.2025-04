import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Perfil from './components/Perfil';
import ListaPerfiles from './components/ListaPerfiles';
import Catalogo from './components/Catalogo';
import user1 from './images/user1.jpg';
import user2 from './images/user2.jpg';
import user3 from './images/user3.jpg';
import user4 from './images/user4.jpg';
import user5 from './images/user5.jpg';
import user6 from './images/user6.jpg';
import './styles/App.css';

const perfiles = [
  {
    nombre: 'Laura',
    rol: 'Desarrolladora Frontend',
    imagen: user1
  },
  {
    nombre: 'Carlos',
    rol: 'Diseñador UX/UI',
    imagen: user2
  },
  {
    nombre: 'María',
    rol: 'Product Manager',
    imagen: user3
  }
];

const dataPerfiles = [
  {
    nombre: 'Juan',
    rol: 'Fullstack Developer',
    imagen: user4
  },
  {
    nombre: 'Lucía',
    rol: 'Scrum Master',
    imagen: user5
  },
  {
    nombre: 'Andrés',
    rol: 'QA Tester',
    imagen: user6
  }
];

const productos = [
  { nombre: 'Laptop Gamer', descripcion: 'Potente y ligera', precio: 1500 },
  { nombre: 'Mouse Inalámbrico', descripcion: 'Ergonómico y rápido', precio: 50 },
  { nombre: 'Monitor 4K', descripcion: 'Resolución UHD', precio: 300 }
];

// Componente principal
function App() {
  return (
    <div className="contenedor">
      <Header />
      <Card />

      <h2>Perfiles iniciales</h2>
      <div className="lista-perfiles">
        {perfiles.map((p, index) => (
          <Perfil key={index} {...p} />
        ))}
      </div>


      <h2>Lista de Perfiles</h2>
      <ListaPerfiles data={dataPerfiles} />

      <h2>Catálogo de Productos</h2>
      <Catalogo productos={productos} />

      <Footer />
    </div>
  );
}

export default App;
