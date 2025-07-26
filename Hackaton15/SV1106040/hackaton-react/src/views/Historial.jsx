import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const Historial = () => {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    const datos = localStorage.getItem('historialCompras');
    if (datos) {
      setCompras(JSON.parse(datos));
    }
  }, []);

  if (compras.length === 0) {
    return <h4>No hay compras registradas.</h4>;
  }

  return (
    <div>
      <h2>🧾 Historial de Compras</h2>
      {compras.map((compra, i) => (
        <div key={i} className="mb-4 border rounded p-3 bg-light">
          <h5>Compra realizada el {compra.fecha}</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {compra.productos.map((p, j) => (
                <tr key={j}>
                  <td>{p.title}</td>
                  <td>{p.cantidad}</td>
                  <td>${p.price}</td>
                  <td>${(p.price * p.cantidad).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <strong>Total: ${compra.total}</strong>
        </div>
      ))}
    </div>
  );
};

export default Historial;
