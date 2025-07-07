import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Acerca from './pages/Acerca';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="container mt-4">
      <nav className="nav nav-pills mb-4">
        <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/acerca">Acerca</NavLink>
        <NavLink className="nav-link" to="/productos">Productos</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
