import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('Error al cargar productos');
        return res.json();
      })
      .then((data) => setProductos(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="row">
      {productos.map((producto) => (
        <div className="col-md-3 mb-4" key={producto.id}>
          <div className="card h-100">
            <img
              src={producto.image}
              className="card-img-top p-3"
              alt={producto.title}
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{producto.title.slice(0, 30)}...</h5>
              <p className="card-text">${producto.price}</p>
              <Link
                to={`/producto/${producto.id}`}
                className="btn btn-outline-primary mt-auto"
              >
                Ver Detalle
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}