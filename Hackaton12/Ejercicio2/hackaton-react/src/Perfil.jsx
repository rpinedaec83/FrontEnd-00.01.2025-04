import './App.css';



function Perfil({ nombre, rol, imagen }) {
  return (
    <div className="perfil-card">
      <img className="perfil-imagen" src={imagen} alt={`Foto de ${nombre}`} />
      <h2 className="perfil-nombre">{nombre}</h2>
      <p className="perfil-rol">{rol}</p>
    </div>
  );
}

export default Perfil;
