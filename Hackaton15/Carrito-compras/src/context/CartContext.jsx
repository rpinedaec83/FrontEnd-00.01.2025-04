import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [interactionCount, setInteractionCount] = useState(() => {
    const stored = localStorage.getItem('interactionCount');
    return stored ? parseInt(stored, 10) : 0;
  });
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });
  const [purchaseHistory, setPurchaseHistory] = useState(() => {
    const stored = localStorage.getItem('purchaseHistory');
    return stored ? JSON.parse(stored) : [];
  });
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('currentUser');
    return stored || `Usuario_${Math.floor(Math.random() * 1000)}`;
  });
  const [userStats, setUserStats] = useState(() => {
    const stored = localStorage.getItem('userStats');
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('interactionCount', interactionCount);
  }, [interactionCount]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));
  }, [purchaseHistory]);

  useEffect(() => {
    localStorage.setItem('currentUser', user);
  }, [user]);

  useEffect(() => {
    localStorage.setItem('userStats', JSON.stringify(userStats));
  }, [userStats]);

  const addToCart = (product) => {
    const event = new CustomEvent('productAdded', { detail: product });
    document.dispatchEvent(event);

    setInteractionCount(prev => prev + 1);

    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setInteractionCount(prev => prev + 1);
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setInteractionCount(prev => prev + 1);
    setCart([]);
  };

  const finalizePurchase = () => {
    const total = getTotal();
    const purchaseSummary = {
      date: new Date().toISOString(),
      user,
      items: cart,
      total
    };
    setPurchaseHistory(prev => [...prev, purchaseSummary]);
    setUserStats(prev => {
      const updated = { ...prev };
      if (!updated[user]) {
        updated[user] = 0;
      }
      updated[user] += parseFloat(total);
      return updated;
    });
    clearCart();
    alert('✅ Compra finalizada con éxito. Gracias por tu compra.');
  };

  const toggleFavorite = (product) => {
    const exists = favorites.find(item => item.id === product.id);
    if (exists) {
      setFavorites(prev => prev.filter(item => item.id !== product.id));
    } else {
      setFavorites(prev => [...prev, product]);
    }
  };

  const isFavorite = (id) => {
    return favorites.some(item => item.id === id);
  };

  const getTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getRanking = () => {
    return Object.entries(userStats)
      .sort(([, a], [, b]) => b - a)
      .map(([user, total]) => ({ user, total: total.toFixed(2) }));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        finalizePurchase,
        getTotal,
        getTotalItems,
        interactionCount,
        favorites,
        toggleFavorite,
        isFavorite,
        purchaseHistory,
        user,
        setUser,
        getRanking
      }}>
      {children}
    </CartContext.Provider>
  );
};
