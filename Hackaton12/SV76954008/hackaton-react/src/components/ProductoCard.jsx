function ProductoCard({ nombre, descripcion, precio }) {
  return (
    <div className="producto-card">
      <h4>{nombre}</h4>
      <p>{descripcion}</p>
      <p>Precio: S/. {precio}</p>
    </div>
  );
}
export default ProductoCard;
