function ProductoCard({ nombre, descripcion, precio }) {
    return (
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        margin: '1rem',
        width: '200px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ fontSize: '1.2rem' }}>{nombre}</h2>
        <p>{descripcion}</p>
        <p><strong>S/.{precio}.00</strong></p>
      </div>
    );
  }
  
  export default ProductoCard;
  