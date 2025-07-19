import React from 'react';
import { useCart } from '../contexts/CartContext';

function Cart() {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  return (
    <div className="container mt-4">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                <div>
                  <h5>{item.title}</h5>
                  <p className="mb-0">Cantidad: {item.quantity}</p>
                  <p className="mb-0">Subtotal: ${item.price * item.quantity}</p>
                </div>
                <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>
                  Quitar
                </button>
              </li>
            ))}
          </ul>
          <h4>Total: ${totalPrice.toFixed(2)}</h4>
        </>
      )}
    </div>
  );
}

export default Cart;
