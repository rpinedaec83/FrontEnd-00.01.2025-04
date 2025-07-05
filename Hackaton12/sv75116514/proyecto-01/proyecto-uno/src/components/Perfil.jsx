function Perfil({ nombre, rol, imagen }) {
    return (
      <div style={{
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        width: '200px',
        textAlign: 'center'
      }}>
        <img src={imagen} alt={`Foto de ${nombre}`} style={{ width: '200px' }} />
        <h3>{nombre}</h3>
        <p>{rol}</p>
      </div>
    );
  }
  
  export default Perfil;
  