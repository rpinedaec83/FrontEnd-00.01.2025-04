import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const MainLayout = ({ children }) => {
  const { cart } = useCart();

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">🛍️ Tienda</Link>
          <Nav className="ms-auto">
            <Link to="/cart" className="nav-link">Carrito ({cart.length})</Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className='py-4'>{children}</Container>
    </>
  );
};

export default MainLayout;
