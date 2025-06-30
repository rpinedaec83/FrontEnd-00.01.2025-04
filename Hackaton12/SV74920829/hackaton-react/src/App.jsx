// Importaciones de React y componentes personalizados
import React from 'react';
import Header from './components/Header';       // Encabezado de la aplicación
import Footer from './components/Footer';       // Pie de página
import Card from './components/Card';           // Tarjeta de presentación o bienvenida
import Perfil from './components/Perfil';       // Componente individual de perfil
import ListaPerfiles from './components/ListaPerfiles'; // Componente que agrupa varios perfiles
import Catalogo from './components/Catalogo';   // Componente que muestra productos

// Imágenes de usuarios
import user1 from './images/user1.jpg';
import user2 from './images/user2.jpg';
import user3 from './images/user3.jpg';
import user4 from './images/user4.jpg';
import user5 from './images/user5.jpg';
import user6 from './images/user6.jpg';

// Estilos globales
import './styles/App.css';

// Datos de ejemplo para los perfiles iniciales
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

// Datos para un segundo grupo de perfiles
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

// Datos de productos para mostrar en el catálogo
const productos = [
  { nombre: 'Laptop Gamer', descripcion: 'Potente y ligera', precio: 1500 },
  { nombre: 'Mouse Inalámbrico', descripcion: 'Ergonómico y rápido', precio: 50 },
  { nombre: 'Monitor 4K', descripcion: 'Resolución UHD', precio: 300 }
];

// Componente principal de la aplicación
function App() {
  return (
    <div className="contenedor">
      {/* Cabecera de la app */}
      <Header />

      {/* Tarjeta destacada (puede usarse para bienvenida o presentación) */}
      <Card />

      {/* Sección de perfiles iniciales renderizados uno por uno */}
      <h2>Perfiles iniciales</h2>
      <div className="lista-perfiles">
        {perfiles.map((p, index) => (
          <Perfil key={index} {...p} />  // Se pasa cada perfil como props al componente
        ))}
      </div>

      {/* Sección con componente de lista de perfiles reutilizable */}
      <h2>Lista de Perfiles</h2>
      <ListaPerfiles data={dataPerfiles} />

      {/* Sección del catálogo de productos */}
      <h2>Catálogo de Productos</h2>
      <Catalogo productos={productos} />

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
