import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';

const FavoritesList = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return <div className="container my-4"><h3>No hay favoritos aún ❤️</h3></div>;
  }

  return (
    <div className="container my-4">
      <h2>❤️ Mis Favoritos</h2>
      <div className="row">
        {favorites.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card h-100">
              <img
                src={item.image}
                className="card-img-top p-3"
                alt={item.title}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-success fw-bold">${item.price}</p>
                <button
                  className="btn btn-danger mt-auto"
                  onClick={() => removeFavorite(item.id)}
                >
                  Eliminar favorito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
