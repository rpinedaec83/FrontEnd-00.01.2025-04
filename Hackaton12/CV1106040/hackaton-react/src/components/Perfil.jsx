function Perfil({ nombre, rol, imagen }) {
  return (
    <div className="perfil">
      <img src={imagen} alt={nombre} width={150} />
      <h3>{nombre}</h3>
      <p>{rol}</p>
    </div>
  );
}

export default Perfil;
