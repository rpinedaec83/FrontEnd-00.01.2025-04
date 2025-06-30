function ProductoCard({ nombre, descripcion, precio }) {
    return (
        <div className="producto-card">
            <h3>{nombre}</h3>
            <p>{descripcion}</p>
            <p><strong>s/{precio}</strong></p>
        </div>
    );
}

export default ProductoCard;
