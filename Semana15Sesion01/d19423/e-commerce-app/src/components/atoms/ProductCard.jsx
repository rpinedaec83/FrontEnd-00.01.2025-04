export default function ProductCard({product}){
    return (
        <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} width='120px' />
            <div className="card-body">
                <h5>{product.title}</h5>
                <p>{product.price}</p>
            </div>
        </div>
    )
}