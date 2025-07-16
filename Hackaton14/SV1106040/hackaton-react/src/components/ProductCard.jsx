import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useCart } from '../contexts/CartContext';
import { useFavoritos } from '../hooks/useFavoritos';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; //  ícono coranzoncito
import './ProductCard.css';

const ProductCard = ({ producto }) => {
  const { addToCart } = useCart();
  const { favoritos, toggleFavorito } = useFavoritos();
  const esFavorito = favoritos.some((p) => p.id === producto.id);

  return (
    <Card className="shadow-sm h-100 position-relative">
      {/* ❤️ Botón en esquina */}
      <Button
        variant="light"
        size="sm"
        className="position-absolute top-0 end-0 m-2 border-0"
        onClick={() => toggleFavorito(producto)}
        title={esFavorito ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      >
        {esFavorito ? <FaHeart className="text-danger" /> : <FaRegHeart />}
      </Button>

      <Card.Img
        variant="top"
        src={producto.image}
        height="200"
        style={{ objectFit: 'contain', padding: '1rem' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6 text-truncate">{producto.title}</Card.Title>
        <Card.Text className="text-muted small">
          {producto.description.slice(0, 80)}...
        </Card.Text>
        <Card.Text className="fw-bold text-primary">${producto.price}</Card.Text>

        <div className="mt-auto d-flex justify-content-between">
          <Button variant="outline-primary" size="sm" href={`/producto/${producto.id}`}>
            Ver
          </Button>
          <Button variant="success" size="sm" onClick={() => addToCart(producto)}>
            Agregar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

