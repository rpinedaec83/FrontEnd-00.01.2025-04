import { useState, useEffect } from 'react'; //  1. IMPORTAR useEffect
import './App.css';

import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Home from './views/Home';
import Acerca from './views/Acerca';
import Productos from './views/Productos';
import ProductoDetalle from './views/ProductoDetalle';
import Contador from './views/Contador';
import Cart from './views/Cart';
import Favoritos from './views/Favoritos';
import { useClickCounter } from './hooks/useClickCounter';
import Historial from './views/Historial';
import Leaderboard from './views/Leaderboard';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useCart } from './contexts/CartContext';
import { useFavoritos } from './hooks/useFavoritos';

const usuarioActual = localStorage.getItem('usuario') || (() => {
  const nombres = ['Ana', 'Luis', 'Carlos', 'Marta', 'Lucía', 'Diego'];
  const nuevo = nombres[Math.floor(Math.random() * nombres.length)];
  localStorage.setItem('usuario', nuevo);
  return nuevo;
})();


function App() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const { favoritos } = useFavoritos();
  const clicks = useClickCounter(); // usar hook
  

  // 2. AGREGAR ESCUCHADOR DE EVENTO PERSONALIZADO
  useEffect(() => {
    const handleProductAdded = (e) => {
      alert(` Producto agregado: ${e.detail.title}`);
    };

    document.addEventListener('productAdded', handleProductAdded);

    // Limpiar el listener al desmontar
    return () => {
      document.removeEventListener('productAdded', handleProductAdded);
    };
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">APP & ROPA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/acerca">Acerca</Nav.Link>
          <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
          <Nav.Link as={NavLink} to="/contador">Contador</Nav.Link>
          <Nav.Link as={NavLink} to="/favoritos">
            <FaHeart className="me-1" />
            <span className="badge bg-danger">{favoritos.length}</span>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/carrito">
            <FaShoppingCart className="me-1" />
            <span className="badge bg-success">{cart.length}</span>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/historial">Historial</Nav.Link>
          <Nav.Link as={NavLink} to="/leaderboard">Leaderboard</Nav.Link>
          
        </Nav>

        <div className="text-white me-3">
          🖱️ Clics carrito: <strong>{clicks}</strong>
        </div>
        <div className="text-white me-3">
         Usuario: <strong>{usuarioActual}</strong>
        </div>

        <Button variant="outline-light" onClick={() => navigate('/productos')}>
          Ir a Productos
        </Button>
      </Navbar.Collapse>

          
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/leaderboard" element={<Leaderboard />} />

          <Route path="*" element={<h2>404 Página no encontrada</h2>} />
        

        </Routes>
      </Container>
    </>
  );
}

export default App;


