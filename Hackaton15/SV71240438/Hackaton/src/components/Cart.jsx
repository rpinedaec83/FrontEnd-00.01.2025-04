import { useCart } from "../context/CartContext";

function Cart() {
  const { cart = [], removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>🛒 Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "50px", height: "50px", objectFit: "contain" }}
              />

              <div style={{ flexGrow: 1 }}>
                <p>{item.title}</p>
                <p>Precio: ${item.price.toFixed(2)}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              </div>

              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}

          <hr />
          <h3>Total a pagar: ${total.toFixed(2)}</h3>
          <button onClick={clearCart}>Vaciar carrito</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
