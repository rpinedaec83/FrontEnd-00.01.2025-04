import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Hackatón</NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/acerca">Acerca</NavLink>
          <NavLink className="nav-link" to="/productos">Productos</NavLink>
        </div>
      </div>
    </nav>
  )
}
