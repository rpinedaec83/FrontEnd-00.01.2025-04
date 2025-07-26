import { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

const usuarioActual = localStorage.getItem('usuario');
const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [mensaje, setMensaje] = useState('');

  const total = cart.reduce((sum, item) => sum + item.price * item.cantidad, 0).toFixed(2);

  const finalizarCompra = () => {
  const fecha = new Date().toLocaleString();

  const historial = JSON.parse(localStorage.getItem('historialCompras')) || [];
  const nuevaCompra = {
    fecha,
    productos: cart,
    total
  };
  localStorage.setItem('historialCompras', JSON.stringify([...historial, nuevaCompra]));

  // Leaderboard de usuarios
  const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || {};
  leaderboard[usuarioActual] = (leaderboard[usuarioActual] || 0) + parseFloat(total);
  localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

  clearCart();
  alert('¡Compra finalizada!');
};


  if (cart.length === 0) {
    return <h4>Tu carrito está vacío.</h4>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>

      {mensaje && <Alert variant="success">{mensaje}</Alert>}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.cantidad}</td>
              <td>${item.price}</td>
              <td>${(item.price * item.cantidad).toFixed(2)}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4>Total a pagar: ${total}</h4>

      <div className="d-flex gap-2">
        <Button variant="success" onClick={finalizarCompra}>✅ Finalizar Compra</Button>
        <Button variant="warning" onClick={clearCart}>🗑️ Vaciar Carrito</Button>
      </div>
    </div>
  );
};

export default Cart;
