import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function Productos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al obtener los productos");
        }
        return res.json();
      })
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Hubo un problema al cargar los productos");
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h1>🛒 Productos</h1>

        {/* Loading */}
        {loading && <p className="text-info">Cargando productos...</p>}

        {/* Error */}
        {error && <p className="text-danger">{error}</p>}

        {/* Productos */}
        <div className="row">
          {!loading &&
            !error &&
            productos.map((producto) => (
              <div className="col-md-4 mb-4" key={producto.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={producto.image}
                    className="card-img-top p-3"
                    alt={producto.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{producto.title}</h5>
                    <p className="card-text text-muted">{producto.category}</p>
                    <p className="card-text fw-bold">${producto.price}</p>
                    <p className="card-text" style={{ fontSize: "0.9rem" }}>
                      {producto.description.substring(0, 100)}...
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Productos;
