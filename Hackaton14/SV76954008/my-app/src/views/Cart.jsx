import { useCart } from '../contexts/CartContext';
import { Button, Table } from 'react-bootstrap';

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, p) => sum + p.price, 0).toFixed(2);

  return (
    <div className='cart-view'>
      <h2>🛒 Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <Button variant='danger' size='sm' onClick={() => removeFromCart(item.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4 className='text-end'>Total: ${total}</h4>
        </>
      )}
    </div>
  );
};

export default Cart;
