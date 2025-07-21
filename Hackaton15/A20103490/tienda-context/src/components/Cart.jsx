import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotal, checkout } = useContext(CartContext);

  if (cart.length === 0) {
    return <div className="container my-4"><h3>🛒 El carrito está vacío</h3></div>;
  }

  return (
    <div className="container my-4">
      <h2>🛍️ Carrito de Compras</h2>
      <ul className="list-group mb-3">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
              <span>{item.title}</span>
            </div>
            <div>
              <span className="fw-bold me-3">${item.price}</span>
              <button onClick={() => removeFromCart(item.id)} className="btn btn-danger btn-sm">
                Quitar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between align-items-center">
        <h4>Total: ${getTotal()}</h4>
        <button className="btn btn-warning" onClick={clearCart}>Vaciar carrito</button>
         <button className="btn btn-success" onClick={checkout}>Finalizar compra</button>
      </div>
    </div>
  );
};

export default Cart;
