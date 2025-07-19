// src/views/Products.jsx
import { useEffect, useState } from 'react'
import { getAllProducts } from '../api/productService'
import ProductCard from '../components/ProductCard'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getAllProducts()
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-center">Cargando productos...</p>
  if (error) return <p className="text-center text-danger">Error al cargar productos</p>

  return (
    <div>
      <h2 className="mb-4">Productos</h2>
      <div className="row">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products
