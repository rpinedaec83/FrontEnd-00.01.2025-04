import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Productos() {
  const [productos, setProductos] = useState([]); // Estado para almacenar productos
  const [cargando, setCargando] = useState(true); // Estado para indicar carga en proceso
  const [error, setError] = useState(null); // Estado para almacenar errores

  // Fetch a la API para obtener todos los productos al montar el componente
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProductos(data); // Guardar productos recibidos
        setCargando(false); // Terminar carga
      })
      .catch(() => {
        setError('Error al cargar los productos'); // Manejo de error
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>; // Mensaje mientras carga
  if (error) return <p>{error}</p>; // Mostrar error si lo hay

  // Mostrar lista de productos en tarjetas
  return (
    <div className="row">
      {productos.map(producto => (
        <div className="col-md-4 mb-3" key={producto.id}>
          <div className="card h-100">
            <img
              src={producto.image}
              alt={producto.title}
              className="card-img-top p-3"
              style={{ height: '200px', objectFit: 'contain' }}
            />
            <div className="card-body">
              <h5 className="card-title">{producto.title}</h5>
              <p className="card-text">s/{producto.price}</p>
              {/* Enlace a detalle del producto */}
              <Link to={`/producto/${producto.id}`} className="btn btn-primary">
                Ver más
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
