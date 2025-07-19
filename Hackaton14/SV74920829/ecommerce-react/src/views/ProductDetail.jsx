// src/views/ProductDetail.jsx
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../api/productService'
import { useCart } from '../contexts/CartContext'

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart() // ✅ Hook dentro del componente

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getProductById(id)
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError(true)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p className="text-center">Cargando producto...</p>
  if (error) return <p className="text-center text-danger">Error al cargar producto</p>
  if (!product) return null

  return (
    <div className="row">
      <div className="col-md-5">
        <img
          src={product.image}
          alt={product.title}
          className="img-fluid"
          style={{ maxHeight: '400px', objectFit: 'contain' }}
        />
      </div>
      <div className="col-md-7">
        <h2>{product.title}</h2>
        <p className="text-muted">{product.category}</p>
        <h4 className="text-success">S/{product.price}</h4>
        <p>{product.description}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
