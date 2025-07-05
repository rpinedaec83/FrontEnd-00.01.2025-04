import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Acerca from './pages/Acerca'
import Productos from './pages/Productos'
import ProductoDetalle from './pages/ProductoDetalle'
import NoEncontrado from './pages/NoEncontrado'
import Contador from './pages/Contador'

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <NavLink className="navbar-brand" to="/">Mi Proyecto SPA</NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/acerca">Acerca</NavLink>
          <NavLink className="nav-link" to="/productos">Productos</NavLink>
          <NavLink className="nav-link" to="/contador">Contador</NavLink>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </div>
    </>
  )
}

export default App