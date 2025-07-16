import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Acerca from './pages/Acerca'
import Productos from './pages/Productos'
import ProductoDetalle from './pages/ProductoDetalle'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </div>
    </>
  )
}

export default App
