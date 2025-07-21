import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.cart.find((item) => item.id === action.payload.id);
      if (exist) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return { cart: [] };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState, (initial) => {
    try {
      const stored = localStorage.getItem("cart");
      return {
        cart: stored ? JSON.parse(stored) : initial.cart,
      };
    } catch (error) {
      console.error("Error parsing localStorage cart:", error);
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });

    const event = new CustomEvent("productAdded", { detail: product });
    document.dispatchEvent(event);
  };

  const removeFromCart = (id) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: id });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{ cart: state.cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
