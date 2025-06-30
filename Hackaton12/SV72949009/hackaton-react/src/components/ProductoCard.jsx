function ProductoCard({ nombre, descripcion, precio, imagen }) {
  return (
    <div className="producto-card">
      <img src={imagen} alt={`Imagen de ${nombre}`} width="200" />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <strong>S/. {precio}</strong>
    </div>
  );
}

export default ProductoCard;