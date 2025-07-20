// src/components/Cart.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart, getTotal } = useContext(CartContext);

  const checkout = () => {
    const history = JSON.parse(localStorage.getItem('purchases') || '[]');
    history.push(cart);
    localStorage.setItem('purchases', JSON.stringify(history));
    clearCart();
    alert("Gracias por tu compra");
  };

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 && <p>Vacío</p>}
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.title} - ${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      {cart.length > 0 && (
        <>
          <p>Total: ${getTotal()}</p>
          <button onClick={clearCart}>Vaciar carrito</button>
          <button onClick={checkout}>Finalizar compra</button>
        </>
      )}
    </div>
  );
}
