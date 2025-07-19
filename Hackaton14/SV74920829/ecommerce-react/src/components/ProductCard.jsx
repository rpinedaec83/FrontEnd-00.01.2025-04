// src/components/ProductCard.jsx
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={product.image} className="card-img-top p-4" alt={product.title} style={{ height: '250px', objectFit: 'contain' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.title.slice(0, 40)}...</h5>
          <p className="card-text text-muted">S/{product.price}</p>
          <Link to={`/producto/${product.id}`} className="btn btn-primary mt-auto">Ver detalle</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
