import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, clearCart, getTotal } = useContext(CartContext);

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id}>
                                <span>{item.title}</span>
                                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <h3>Total: ${getTotal()}</h3>
                    </div>
                    <button onClick={clearCart}>Limpiar Carrito</button>
                </>
            )}
        </div>
    );
};

export default Cart;