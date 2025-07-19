import { useCart } from '../contexts/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cartItems.length === 0) {
    return (
      <div className="text-center">
        <h2>Tu carrito está vacío</h2>
        <Link to="/productos" className="btn btn-primary mt-3">Ver productos</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>Carrito</h2>
      <ul className="list-group mb-3">
        {cartItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h6>{item.title}</h6>
              <p>S/{item.price} x {item.quantity}</p>
            </div>
            <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h4>Total: S/{total.toFixed(2)}</h4>
      <button className="btn btn-danger me-2" onClick={clearCart}>Vaciar carrito</button>
      <button className="btn btn-success">Finalizar compra</button>
    </div>
  )
}

export default Cart
