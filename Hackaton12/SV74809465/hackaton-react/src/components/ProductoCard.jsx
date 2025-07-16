import React from "react";

function ProductoCard({ nombre, imagen, descripcion, precio }) {
    return (
        <div className="producto-card">
            <h3>{nombre}</h3>
            <img src={imagen} alt={nombre} style={{ height: 100 , borderRadius: "0%" }} />
            <p>{precio}</p>
            <p>{descripcion}</p>
        </div>
    );
}

export default ProductoCard;