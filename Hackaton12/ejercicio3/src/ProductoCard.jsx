import './ProductoCard.css';

function ProductoCard({ nombre, descripcion, precio }) {
  return (
    <div className="producto-card">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p className="precio">S/. {precio.toFixed(2)}</p>
    </div>
  );
}

export default ProductoCard;
