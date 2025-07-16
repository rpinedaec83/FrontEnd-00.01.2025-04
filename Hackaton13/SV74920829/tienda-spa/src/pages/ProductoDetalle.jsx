import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ProductoDetalle() {
  const { id } = useParams(); // Obtener el id del producto desde la URL
  const [producto, setProducto] = useState(null); // Estado para almacenar el producto
  const [cargando, setCargando] = useState(true); // Estado para indicar carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Fetch para obtener detalle del producto al cambiar el id
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data); // Guardar datos del producto
        setCargando(false); // Indicar que terminó de cargar
      })
      .catch(() => {
        setError('Producto no encontrado'); // Manejar error en la carga
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <p>Cargando detalle...</p>; // Mostrar mensaje mientras carga
  if (error) return <p>{error}</p>; // Mostrar error si hubo problema

  // Mostrar detalle del producto
  return (
    <div className="card p-4">
      <h2>{producto.title}</h2>
      <img src={producto.image} alt={producto.title} style={{ width: '200px', objectFit: 'contain' }} />
      <p className="mt-3">{producto.description}</p>
      <h4>s/{producto.price}</h4>
    </div>
  );
}
