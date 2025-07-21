import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Cargar desde localStorage al iniciar
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Guardar en localStorage cada vez que cambie el carrito
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });

    // Evento personalizado
    const event = new CustomEvent('productAdded', { detail: product });
    document.dispatchEvent(event);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);
  };

  const checkout = () => {
    const date = new Date().toISOString();
    const purchase = {
      date,
      items: cart,
      total: getTotal(),
    };

    const history = JSON.parse(localStorage.getItem('history') || '[]');
    history.push(purchase);
    localStorage.setItem('history', JSON.stringify(history));

    clearCart();
    alert('✅ Compra finalizada. ¡Gracias por tu pedido!');
  };


  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getTotal, checkout }}
    >
      {children}
    </CartContext.Provider>
  );
};
