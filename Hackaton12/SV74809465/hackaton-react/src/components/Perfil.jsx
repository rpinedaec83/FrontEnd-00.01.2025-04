import React from "react";

function Perfil({ nombre, rol, imagen }) {
  return (
    <div className="perfil-card">
      <img src={imagen} alt={nombre} style={{borderRadius: "50%" }} />
      <h3>{nombre}</h3>
      <p>{rol}</p>
    </div>
  );
}

export default Perfil;