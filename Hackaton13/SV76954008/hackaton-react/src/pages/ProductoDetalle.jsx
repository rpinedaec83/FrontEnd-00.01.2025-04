import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ProductoDetalle() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(setProducto)
  }, [id])

  if (!producto) return <p>Cargando...</p>

  return (
    <>
      <h2>{producto.title}</h2>
      <img src={producto.image} alt="" height="200" />
      <p>{producto.description}</p>
      <p><strong>Precio:</strong> ${producto.price}</p>
    </>
  )
}
