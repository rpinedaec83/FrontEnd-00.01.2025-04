import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import Acerca from './Pages/Acerca';
import Productos from './Pages/Productos';


function App(){
  return (
    <div className='container-fluid'>
      <nav className='navbar navbar-expand bg-light p-3'>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/acerca" className="nav-link">Acerca</NavLink>
        <NavLink to="/productos" className="nav-link">Productos</NavLink>
      </nav>

      <div className='container mt-4'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </div>
    </div>
  )
}
export default App
