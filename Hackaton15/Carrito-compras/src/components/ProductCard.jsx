// src/components/ProductCard.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart, toggleFavorite, isFavorite } = useContext(CartContext);

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      width: '200px',
      position: 'relative',
    }}>
      <button
        onClick={() => toggleFavorite(product)}
        style={{
          position: 'absolute',
          top: 5,
          right: 5,
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
        }}
      >
        {isFavorite(product.id) ? '❤️' : '🤍'}
      </button>
      <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
}
