import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando detalle...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="card">
      <img src={producto.image} className="card-img-top p-5" alt={producto.title} style={{ maxHeight: '300px', objectFit: 'contain' }} />
      <div className="card-body">
        <h2 className="card-title">{producto.title}</h2>
        <p>{producto.description}</p>
        <p><strong>${producto.price}</strong></p>
      </div>
    </div>
  );
}
