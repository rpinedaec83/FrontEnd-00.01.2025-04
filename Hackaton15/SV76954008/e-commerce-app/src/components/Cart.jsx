import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, clearCart, getTotal } = useContext(CartContext);

  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h4 className="mb-0">🛒 Carrito</h4>
      </div>
      <div className="card-body">
        {cart.length === 0 ? (
          <p className="text-muted">Tu carrito está vacío.</p>
        ) : (
          <ul className="list-group list-group-flush">
            {cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{item.title}</span>
                <div className="text-end">
                  <strong className="text-primary">${item.price}</strong>
                  <button
                    className="btn btn-sm btn-outline-danger ms-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ✖
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="card-footer">
        <p className="mb-2 fw-bold">Total: S/ {getTotal().toFixed(2)}</p>
        <button className="btn btn-danger w-100" onClick={clearCart}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}
