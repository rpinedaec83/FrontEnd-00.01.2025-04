import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("No encontrado");
        return res.json();
      })
      .then(data => {
        setProducto(data);
        setLoading(false);
      })
      .catch(err => {
        setError("Producto no encontrado");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando detalles del producto...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="card">
      <img src={producto.image} className="card-img-top p-4" style={{ maxWidth: 300 }} alt={producto.title} />
      <div className="card-body">
        <h5 className="card-title">{producto.title}</h5>
        <p className="card-text">{producto.description}</p>
        <p><strong>Precio: </strong>${producto.price}</p>
      </div>
    </div>
  );
}