import './ProductoCard.css';

function ProductoCard({ nombre, descripcion, precio }) {
  return (
    <div className="producto-card">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p className="precio">Precio: ${precio}</p>
    </div>
  );
}

export default ProductoCard;

