import ProductoCard from './ProductoCard';

const productos = [
  { nombre: 'Laptop', descripcion: 'Potente para desarrollo web', precio: 3500 },
  { nombre: 'Mouse', descripcion: 'Ergonómico y preciso', precio: 150 },
  { nombre: 'Teclado', descripcion: 'Mecánico retroiluminado', precio: 250 },
];

function Catalogo() {
  return (
    <div className="catalogo">
      {productos.map((producto, index) => (
        <ProductoCard key={index} {...producto} />
      ))}
    </div>
  );
}
export default Catalogo;