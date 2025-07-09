import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function DetalleProducto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Producto no encontrado');
        return res.json();
      })
      .then((data) => setProducto(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!producto) return null;

  return (
    <div className="card p-4">
      <h2>{producto.title}</h2>
      <img
        src={producto.image}
        alt={producto.title}
        style={{ maxWidth: '200px', objectFit: 'contain' }}
        className="my-3"
      />
      <p><strong>Categoría:</strong> {producto.category}</p>
      <p><strong>Descripción:</strong> {producto.description}</p>
      <p><strong>Precio:</strong> ${producto.price}</p>
    </div>
  );
}