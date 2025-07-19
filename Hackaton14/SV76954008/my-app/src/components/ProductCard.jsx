import { Card, Button } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className='h-100'>
      <Card.Img variant='top' src={product.image} height={200} style={{ objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant='primary' onClick={() => addToCart(product)}>Agregar al carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
