import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Perfil from './components/Perfil';

const perfilesData = [
  {
    nombre: 'Katty Romero',
    rol: 'Desarrolladora Frontend',
    imagen: 'https://via.placeholder.com/150'
  },
  {
    nombre: 'Luis Pérez',
    rol: 'Diseñador UX/UI',
    imagen: 'https://via.placeholder.com/150'
  },
  {
    nombre: 'Carla Gómez',
    rol: 'Fullstack Developer',
    imagen: 'https://via.placeholder.com/150'
  },
];

function App() {
  return (
    <>
      <Header />
      <Card />
      <h2>Equipo</h2>
      <div className="lista-perfiles">
        {perfilesData.map((p, index) => (
          <Perfil
            key={index}
            nombre={p.nombre}
            rol={p.rol}
            imagen={p.imagen}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
