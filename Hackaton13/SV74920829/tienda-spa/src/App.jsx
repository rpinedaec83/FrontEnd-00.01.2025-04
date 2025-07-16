// Importa componentes necesarios de react-router-dom para navegación y manejo de rutas
import { Routes, Route, NavLink } from 'react-router-dom';
// Importa las páginas que se van a renderizar según la ruta
import Home from './pages/Home';
import Acerca from './pages/Acerca';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';

function App() {
  return (
    <div className="container mt-3">
      {/* Barra de navegación con enlaces usando NavLink para aplicar estilos activos */}
      <nav className="nav nav-pills mb-4">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/productos" className="nav-link">Productos</NavLink>
        <NavLink to="/acerca" className="nav-link">Acerca</NavLink>
      </nav>

      {/* Definición de las rutas y los componentes que se muestran para cada una */}
      <Routes>
        {/* Ruta para la página principal */}
        <Route path="/" element={<Home />} />
        {/* Ruta para la lista de productos */}
        <Route path="/productos" element={<Productos />} />
        {/* Ruta con parámetro dinámico para detalles de un producto específico */}
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        {/* Ruta para la página Acerca */}
        <Route path="/acerca" element={<Acerca />} />
        {/* Ruta comodín para mostrar mensaje si no se encuentra la página */}
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </div>
  );
}

export default App;