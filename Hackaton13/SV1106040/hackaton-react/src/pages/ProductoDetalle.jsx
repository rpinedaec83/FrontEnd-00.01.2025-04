import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Container, Card, Spinner, Alert, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function ProductoDetalle() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProducto(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError('Error cargando detalle')
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return (
      <Container className="mt-4">
        <Spinner animation="border" role="status" />
        <span className="ms-2">Cargando detalle...</span>
      </Container>
    )
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    )
  }

  return (
    <Container className="mt-4">
      <Button variant="secondary" className="mb-3" onClick={() => navigate(-1)}>
        Volver
      </Button>
      <Card bg="info" text="white">
        <Card.Img
          variant="top"
          src={producto.image}
          style={{ height: '400px', objectFit: 'contain' }}
        />
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>{producto.description}</Card.Text>
          <Card.Text><strong>Precio:</strong> ${producto.price}</Card.Text>
          <Card.Text><strong>Categoría:</strong> {producto.category}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

