import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, totalItems, removeFromCart, clearCart } = useCart();

  // Calcular el total a pagar
  const totalPrice = cart.reduce(
    (total, item) => total + (item.price * item.quantity),
    0
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Tu Carrito de Compras</h2>
      
      {cart.length === 0 ? (
        <div className="alert alert-info text-center py-4">
          <i className="bi bi-cart-x fs-1 mb-3"></i>
          <h4>Tu carrito está vacío</h4>
          <p className="mb-0">Agrega productos para comenzar</p>
        </div>
      ) : (
        <div className="row">
          {/* Lista de productos */}
          <div className="col-lg-8">
            {cart.map((item) => (
              <div key={item.id} className="card mb-3 shadow-sm">
                <div className="row g-0 align-items-center">
                  {/* Imagen del producto */}
                  <div className="col-md-3 p-2">
                    <div className="ratio ratio-1x1 bg-light rounded">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="img-fluid p-2 object-fit-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Información del producto */}
                  <div className="col-md-6">
                    <div className="card-body py-2">
                      <h5 className="card-title mb-1">{item.name}</h5>
                      <div className=" gap-3 mt-2">
                        <div>
                          <span className="text-muted small">Precio:</span>
                          <span className="ms-1 fw-semibold">S/.    {item.price.toFixed(2)}</span>
                        </div>
                        <div>
                          <span className="text-muted small">Cantidad:</span>
                          <span className="ms-1 fw-semibold">{item.quantity}</span>
                        </div>
                        <div>
                          <span className="text-muted small">Subtotal:</span>
                          <span className="ms-1 fw-semibold text-primary">
                            S/.{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Acciones */}
                  <div className="col-md-3">
                    <div className="d-flex flex-column align-items-center p-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="btn btn-outline-danger btn-sm mb-2 w-100"
                      >
                        <i className="bi bi-trash me-1"></i> Eliminar
                      </button>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Resumen de compra */}
          <div className="col-lg-4">
            <div className="card shadow-sm sticky-top" style={{top: '20px'}}>
              <div className="card-body">
                <h5 className="card-title border-bottom pb-2">Resumen de Compra</h5>
                <div className="d-flex justify-content-between mb-2">
                  <span>Productos ({totalItems}):</span>
                  <span>S/.{totalPrice.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3 fw-bold">
                  <span>Total:</span>
                  <span className="text-primary">S/.{totalPrice.toFixed(2)}</span>
                </div>
                <button className="btn btn-primary w-100 mb-2">
                  <i className="bi bi-credit-card me-2"></i>Pagar ahora
                </button>
                <button
                  onClick={clearCart}
                  className="btn btn-outline-secondary w-100"
                >
                  <i className="bi bi-trash me-2"></i>Vaciar carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}