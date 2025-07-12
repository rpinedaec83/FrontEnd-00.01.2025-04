export default function ProductCard({ product }) {
    // Asegura que el precio tenga 2 decimales
    const precioCompleto = typeof product.price === 'number' 
        ? product.price.toFixed(2) 
        : parseFloat(product.price).toFixed(2);

    return (
        <div className="card h-100" key={product.id}>
            <img 
                src={product.image} 
                alt={product.title} 
                className="card-img-top p-2"
                style={{ height: '180px', objectFit: 'contain' }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text fw-bold mt-auto">S/. {precioCompleto}</p>
            </div>
        </div>
    );
}