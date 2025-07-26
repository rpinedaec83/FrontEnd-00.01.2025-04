import React from 'react';
import { useFavoritos } from '../hooks/useFavoritos';
import { Card, Row, Col, Button } from 'react-bootstrap';

function Favoritos() {
  const { favoritos, toggleFavorito, clearFavoritos } = useFavoritos();

  return (
    <div>
      <h2>Mis Favoritos</h2>

      {favoritos.length === 0 ? (
        <p>No tienes productos en favoritos.</p>
      ) : (
        <>
          <Row>
            {favoritos.map(producto => (
              <Col key={producto.id} md={4} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={producto.image} height={200} style={{ objectFit: 'contain' }} />
                  <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>${producto.price}</Card.Text>
                    <Button variant="danger" onClick={() => toggleFavorito(producto)}>
                      Quitar de favoritos
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <Button variant="outline-danger" onClick={clearFavoritos}>
              🗑️ Limpiar todos los favoritos
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Favoritos;

