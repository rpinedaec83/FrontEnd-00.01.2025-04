// src/components/Cart.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart, getTotal, finalizePurchase } = useContext(CartContext);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>🛒 Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item) => (
              <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '1rem' }}>
                <img src={item.image} alt={item.title} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                <span>{item.title} - ${item.price} × {item.quantity}</span>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${getTotal()}</p>
          <button onClick={clearCart} style={{ marginRight: '1rem' }}>Vaciar carrito</button>
          <button onClick={finalizePurchase}>Finalizar compra</button>
        </>
      )}
    </div>
  );
}

