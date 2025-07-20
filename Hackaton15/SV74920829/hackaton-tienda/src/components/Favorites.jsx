import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Favorites() {
  const { favorites, toggleFavorite } = useContext(CartContext);
  return (
    <div>
      <h2>Favoritos</h2>
      {favorites.length === 0 ? <p>No tienes favoritos aún</p> : (
        favorites.map(p => (
          <div key={p.id}>
            <p>{p.title}</p>
            <button onClick={() => toggleFavorite(p)}>Quitar</button>
          </div>
        ))
      )}
    </div>
  );
}
