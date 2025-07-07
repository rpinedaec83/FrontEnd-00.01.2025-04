import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <p className="text-center mt-5">Cargando detalle...</p>;
  if (!producto) return <p>No se encontró el producto.</p>;

  return (
    <div className="container mt-5">
      <h2>{producto.title}</h2>
      <div className="row">
        <div className="col-md-5">
          <img src={producto.image} className="img-fluid" alt={producto.title} />
        </div>
        <div className="col-md-7">
          <p><strong>Precio:</strong> ${producto.price}</p>
          <p><strong>Descripción:</strong> {producto.description}</p>
          <p><strong>Categoría:</strong> {producto.category}</p>
        </div>
      </div>
    </div>
  );
}

export default Detalle;
