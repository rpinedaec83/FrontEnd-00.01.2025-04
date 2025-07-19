import { useFavorites } from '../context/FavoritesContext';

export default function FavoritesView() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="container mt-4">
      <h2>Mis Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No tienes productos en favoritos.</p>
      ) : (
        <div className="row">
          {favorites.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card h-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="card-img-top p-2"
                  style={{ height: '180px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text fw-bold">S/. {product.price}</p>
                  <button 
                    className="btn btn-outline-danger"
                    onClick={() => removeFromFavorites(product.id)}
                  >
                    Eliminar de favoritos ❤️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
