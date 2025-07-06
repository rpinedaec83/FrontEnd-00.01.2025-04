import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch(() => {
        setError(true);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p className="text-center mt-5">Cargando productos...</p>;
  if (error) return <p className="text-center mt-5 text-danger">Error al cargar productos 😢</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">📦 Productos</h2>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-md-4 mb-4" key={producto.id}>
            <div className="card h-100 shadow-sm">
              <img src={producto.image} className="card-img-top p-4" style={{ height: 250, objectFit: 'contain' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text text-truncate">{producto.description}</p>
                <p className="text-success fw-bold">${producto.price}</p>
                <Link to={`/detalle/${producto.id}`} className="btn btn-primary mt-auto">Ver Detalle</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
