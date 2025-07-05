import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Detalle from './pages/Detalle';

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand bg-light p-3">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/productos" className="nav-link">Productos</NavLink>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<Detalle />} />
        </Routes>
      </div>
    </div>
  );
}
