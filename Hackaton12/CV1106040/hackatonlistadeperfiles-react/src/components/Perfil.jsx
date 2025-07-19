import './Perfil.css';
function Perfil({ nombre, rol, imagen }) {
  return (
    <div className="perfil-card">
      <img src={imagen} alt={nombre} className="perfil-img" />
      <h3>{nombre}</h3>
      <p>{rol}</p>
    </div>
  );
}

export default Perfil;

