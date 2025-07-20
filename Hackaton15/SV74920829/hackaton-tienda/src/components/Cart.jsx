import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
    const { cart, removeFromCart, clearCart, getTotal } = useContext(CartContext);
    const [showSummary, setShowSummary] = useState(false);

    const checkout = () => {
        if (cart.length === 0) return;

        const currentCart = [...cart];
        const total = Number(getTotal());
        const date = new Date().toISOString();

        // Guardar historial de compras
        const prevHistory = JSON.parse(localStorage.getItem('history')) || [];
        const newHistory = [...prevHistory, { date, items: currentCart, total }];
        localStorage.setItem('history', JSON.stringify(newHistory));

        // Guardar totales por usuario para leaderboard
        const currentUser = "Usuario1"; // Cambiar según contexto/login real
        const userTotals = JSON.parse(localStorage.getItem('userTotals')) || {};
        userTotals[currentUser] = (userTotals[currentUser] || 0) + total;
        localStorage.setItem('userTotals', JSON.stringify(userTotals));

        clearCart();
        setShowSummary(true);
    };



    // Resetear mensaje de éxito cuando el carrito se vacíe (para permitir múltiples compras)
    useEffect(() => {
        if (cart.length === 0) {
            setShowSummary(false);
        }
    }, [cart]);

    return (
        <div className="card shadow rounded-4">
            <div className="card-header bg-primary text-white rounded-top-4 d-flex justify-content-between align-items-center">
                <h3 className="mb-0 fs-5">Carrito</h3>
                <button
                    className="btn btn-sm btn-light"
                    onClick={clearCart}
                    disabled={cart.length === 0}
                    title="Vaciar carrito"
                    aria-label="Vaciar carrito"
                >
                    🗑️
                </button>
            </div>
            <div className="card-body" style={{ maxHeight: '350px', overflowY: 'auto' }}>
                {cart.length === 0 ? (
                    <p className="text-muted text-center mt-3">El carrito está vacío.</p>
                ) : (
                    cart.map(product => (
                        <div
                            key={product.id}
                            className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: 60, height: 60, objectFit: 'contain', borderRadius: '0.5rem' }}
                            />
                            <div className="flex-grow-1 ms-3">
                                <p className="mb-0 text-truncate" title={product.title}>
                                    {product.title}
                                </p>
                                <small className="text-success fw-semibold">S/{product.price.toFixed(2)}</small>
                            </div>
                            <button
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => removeFromCart(product.id)}
                                aria-label={`Eliminar ${product.title} del carrito`}
                            >
                                ✖️
                            </button>
                        </div>
                    ))
                )}
            </div>
            <div className="card-footer d-flex flex-column gap-2 rounded-bottom-4">
                <h5 className="text-end mb-1">Total: S/{getTotal()}</h5>
                <button
                    className="btn btn-success fw-semibold shadow-sm"
                    onClick={checkout}
                    disabled={cart.length === 0}
                >
                    Finalizar compra
                </button>
                {showSummary && (
                    <div className="alert alert-success mt-3" role="alert">
                        ¡Compra realizada con éxito! Gracias por tu preferencia.
                    </div>
                )}
            </div>
        </div>
    );
}
