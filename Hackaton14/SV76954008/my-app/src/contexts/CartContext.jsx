// src/contexts/CartContext.jsx
import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.product];
    case 'REMOVE':
      return state.filter(p => p.id !== action.id);
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = product => dispatch({ type: 'ADD', product });
  const removeFromCart = id => dispatch({ type: 'REMOVE', id });

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
