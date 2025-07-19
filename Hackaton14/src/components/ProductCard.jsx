import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';
import { useCart } from '../contexts/CartContext';

function ProductCard({ product }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { addToCart } = useCart();

  return (
    <div className="card h-100 position-relative">
      <button
        className="btn btn-sm position-absolute top-0 end-0 m-2"
        onClick={() => toggleFavorite(product.id)}
        title="Favorito"
        style={{ background: 'transparent', border: 'none', fontSize: '1.5rem' }}
      >
        {isFavorite(product.id) ? '⭐' : '☆'}
      </button>

      <img
        src={product.image}
        className="card-img-top p-3"
        alt={product.title}
        style={{ height: '250px', objectFit: 'contain' }}
      />

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description.slice(0, 100)}...</p>
        <p className="card-text fw-bold">${product.price}</p>
        <div className="d-grid gap-2">
          <Link to={`/product/${product.id}`} className="btn btn-primary">
            Ver más
          </Link>
          <button className="btn btn-outline-success" onClick={() => addToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
