import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: '200px', objectFit: 'contain' }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button onClick={() => navigate(`/product/${product.id}`)} variant="primary">
          Ver Detalles
        </Button>
      </Card.Body>
    </Card>
  );
}