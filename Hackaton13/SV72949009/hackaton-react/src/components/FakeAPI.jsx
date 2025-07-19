import { useEffect, useState } from 'react';

export default function FakeAPI() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProductos(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error al cargar productos');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="row">
      {productos.map(producto => (
        <div className="col-md-4 mb-4" key={producto.id}>
          <div className="card h-100">
            <img src={producto.image} className="card-img-top p-4" style={{ height: '200px', objectFit: 'contain' }} alt={producto.title} />
            <div className="card-body">
              <h5 className="card-title">{producto.title}</h5>
              <p className="card-text">${producto.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}