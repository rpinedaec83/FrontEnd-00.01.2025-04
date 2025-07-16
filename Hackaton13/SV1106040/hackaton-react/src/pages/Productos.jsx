import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap'

export default function Productos() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProductos(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setError('Error cargando productos')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <Container className="mt-4">
        <Spinner animation="border" role="status" />
        <span className="ms-2">Cargando productos...</span>
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
      <h2>Productos</h2>
      <Row>
        {productos.map(prod => (
          <Col key={prod.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={prod.image} style={{ height: '300px', objectFit: 'contain' }} />
              <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Text>${prod.price}</Card.Text>
                <Link to={`/producto/${prod.id}`} className="btn btn-primary">Ver detalle</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
