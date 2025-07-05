import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function ProductoDetalle() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Error al cargar el producto')
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Cargando...</p>
  if (error) return <p>{error}</p>
  if (!producto) return <p>No se encontró el producto.</p>

  return (
    <div className="card mx-auto" style={{maxWidth: '400px'}}>
      <img src={producto.image} className="card-img-top" alt={producto.title} style={{height: '300px', objectFit: 'contain'}} />
      <div className="card-body">
        <h1 className="card-title">{producto.title}</h1>
        <p className="card-text">{producto.description}</p>
        <p className="card-text"><strong>Precio:</strong> {producto.price} €</p>
        <p className="card-text"><strong>Categoría:</strong> {producto.category}</p>
      </div>
    </div>
  )
}

export default ProductoDetalle