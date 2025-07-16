import { useState } from 'react'
import './App.css'


import { Routes, Route, NavLink, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Acerca from './pages/Acerca'
import Productos from './pages/Productos'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import ProductoDetalle from './pages/ProductoDetalle'
import Contador from './pages/Contador'


function App() {
  const navigate = useNavigate()

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">APP & ROPA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/acerca">Acerca</Nav.Link>
            <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/contador">Contador</Nav.Link>
          </Nav>
          <Button variant="outline-light" onClick={() => navigate('/productos')}>
            Ir a Productos
          </Button>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
          <Route path="/contador" element={<Contador />} />
          <Route path="*" element={<h2>404 Página no encontrada</h2>} />
        </Routes>
      </Container>
    </>
  )
}

export default App

