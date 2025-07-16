import ProductoCard from './ProductoCard';
import './Catalogo.css';

function Catalogo({ productos }) {
  return (
    <div className="catalogo">
      {productos.map((prod, idx) => (
        <ProductoCard
          key={idx}
          nombre={prod.nombre}
          descripcion={prod.descripcion}
          precio={prod.precio}
        />
      ))}
    </div>
  );
}

export default Catalogo;
