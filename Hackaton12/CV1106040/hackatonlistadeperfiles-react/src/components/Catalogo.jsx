import ProductoCard from './ProductoCard';

function Catalogo({ productos }) {
  return (
    <div className="catalogo">
      {productos.map((producto, index) => (
        <ProductoCard
          key={index}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
        />
      ))}
    </div>
  );
}

export default Catalogo;
