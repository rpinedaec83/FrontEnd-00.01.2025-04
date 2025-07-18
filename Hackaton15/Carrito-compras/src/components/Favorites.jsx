import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Favorites() {
  const { favorites, addToCart, toggleFavorite, isFavorite } = useContext(CartContext);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>❤️ Favoritos</h2>
      {favorites.length === 0 ? <p>No tienes productos favoritos.</p> : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          {favorites.map(product => (
            <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px', position: 'relative' }}>
              <button onClick={() => toggleFavorite(product)} style={{ position: 'absolute', top: 5, right: 5, background: 'none', border: 'none', fontSize: '1.5rem' }}>
                {isFavorite(product.id) ? '❤️' : '🤍'}
              </button>
              <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
