import { useCart } from '../contexts/CartContext';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.cantidad, 0).toFixed(2);

  if (cart.length === 0) {
    return <h4>Tu carrito está vacío.</h4>;
  }

  return (
    <div>
      <h2>Carrito de Compras</h2>
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
      <Button variant="warning" onClick={clearCart}>Vaciar Carrito</Button>
    </div>
  );
};

export default Cart;
