import ProductoCard from './ProductoCard';

function Catalogo({ productos }) {
    return (
        <div className="catalogo">
            {productos.map((producto, index) => (
                <ProductoCard key={index} {...producto} />
            ))}
        </div>
    );
}

export default Catalogo;
