
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Card, Spinner, Alert, Button, Row, Col } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';

export default function ProductoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Error cargando detalle');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container className="mt-4 text-center">
        <Spinner animation="border" role="status" />
        <span className="ms-2">Cargando detalle...</span>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Button variant="outline-secondary" className="mb-3" onClick={() => navigate(-1)}>
        ← Volver
      </Button>

      <Card className="p-3 shadow-sm">
        <Row>
          <Col md={5} className="text-center">
            <img
              src={producto.image}
              alt={producto.title}
              style={{ maxHeight: '400px', objectFit: 'contain' }}
              className="img-fluid"
            />
          </Col>

          <Col md={7}>
            <Card.Body>
              <Card.Title className="fs-4">{producto.title}</Card.Title>
              <Card.Text className="text-muted">{producto.description}</Card.Text>
              <Card.Text><strong>Precio:</strong> ${producto.price}</Card.Text>
              <Card.Text><strong>Categoría:</strong> {producto.category}</Card.Text>

              <Button variant="success" onClick={() => addToCart(producto)}>
                Agregar al carrito
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
