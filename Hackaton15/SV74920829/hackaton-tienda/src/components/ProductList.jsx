import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const { addToCart, favorites, toggleFavorite } = useContext(CartContext);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <h2 className="mb-4 fw-semibold">Productos Disponibles</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
        {products.map(product => {
          const isFav = favorites.find(item => item.id === product.id);
          return (
            <div key={product.id} className="col">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <div
                  className="overflow-hidden rounded-top-4"
                  style={{ height: 220, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f8f9fa' }}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ maxHeight: '180px', objectFit: 'contain' }}
                    className="card-img-top"
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5
                    className="card-title text-truncate"
                    title={product.title}
                    style={{ fontWeight: 600, fontSize: '1rem' }}
                  >
                    {product.title}
                  </h5>
                  <p className="text-success fw-bold fs-5">S/{product.price.toFixed(2)}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <button
                      className={`btn btn-sm ${isFav ? 'btn-danger' : 'btn-outline-danger'}`}
                      onClick={() => toggleFavorite(product)}
                      aria-label={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                      title={isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                    >
                      {isFav ? '❤️' : '🤍'}
                    </button>
                    <button
                      className="btn btn-primary btn-sm shadow-sm"
                      onClick={() => addToCart(product)}
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
