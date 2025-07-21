import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FavoritesContext } from '../context/FavoritesContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Productos</h2>
      <div className="row">
        {products.map((product) => {
          const fav = isFavorite(product.id);
          return (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: '200px', objectFit: 'contain' }}
                />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title">{product.title}</h5>
                    <button
                      className="btn btn-link p-0"
                      onClick={() =>
                        fav ? removeFavorite(product.id) : addFavorite(product)
                      }
                    >
                      {fav ? '❤️' : '🤍'}
                    </button>
                  </div>
                  <p className="card-text text-success fw-bold">${product.price}</p>
                  <button
                    className="btn btn-primary mt-auto"
                    onClick={() => addToCart(product)}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
