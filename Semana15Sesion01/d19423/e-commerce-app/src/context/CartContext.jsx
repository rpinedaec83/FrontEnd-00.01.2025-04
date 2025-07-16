import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();
const initialState = {
    cart: []
}

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const exist = state.cart.find(item => item.id === action.payload.id);
            if (exist) {
                return {
                    ...state,
                    cart: state.cart.map(item => {
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    })
                }
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case 'CLEAR_CART':
            return { cart: [] }
        default:
            return state;
    }
}

export function CartProvider({ children }) {
    const [state, disptch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => disptch({ type: 'ADD_TO_CART', payload: product })
    const removeFromCart = (id) => disptch({ type: 'REMOVE_FROM_CART', payload: id })
    const clearCart = () => disptch({ type: 'CLEAR_CART' })

    return (
        <CartContext.Provider value={{ cart: state.cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);