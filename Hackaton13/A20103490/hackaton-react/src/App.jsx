import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import { useEffect } from 'react';

export default function App() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
        <NavLink className="navbar-brand" to="/">Hackaton 13</NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/productos">Productos</NavLink>
        </div>
        <button onClick={() => navigate("/productos")} className="btn btn-outline-primary ms-auto">
          Ir a Productos
        </button>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
        </Routes>
      </div>
    </div>
  );
}