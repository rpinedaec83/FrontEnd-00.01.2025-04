import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Productos() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProductos(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error al cargar los productos</p>

  return (
    <>
      <h1>Productos</h1>
      <div className="row">
        {productos.map(prod => (
          <div className="col-md-4 mb-3" key={prod.id}>
            <div className="card h-100">
              <img src={prod.image} className="card-img-top p-3" height="200" />
              <div className="card-body">
                <h5 className="card-title">{prod.title}</h5>
                <p>${prod.price}</p>
                <Link to={`/producto/${prod.id}`} className="btn btn-outline-primary btn-sm">
                  Ver Detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
