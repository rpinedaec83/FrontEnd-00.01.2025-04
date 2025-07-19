import {createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();
const initialState = {
    cart: []
}

function cartReducer(state, action) {
    switch (action.type){
        case 'ADD_TO_CART':
            const exist = state.cart.find(item => item.id === action.payload.id);
            if (exist) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id
                          ? { ...item, quantity: (item.quantity || 1) + 1 }
                          : item
                    )
                };
            }
            return {
                ...state,
                cart: [...state.cart, { 
                    ...action.payload, 
                    quantity: 1,
                    image: action.payload.image }]
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case 'CLEAR_CART':
            return { cart: [] }
        case 'LOAD_CART':
            return {...state, cart: action.payload}
        default:
            return state;
    }
}

export function CartProvider({children}){
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Calcular el total de items
    const totalItems = state.cart.reduce((total, item) => total + (item.quantity || 1), 0);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('cart'));
        if (saved) dispatch({type: 'LOAD_CART', payload: saved});
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    const addToCart = (product) => dispatch({type: 'ADD_TO_CART', payload: product});
    const removeFromCart = (id) => dispatch({type: 'REMOVE_FROM_CART', payload: id});
    const clearCart = () => dispatch({type: 'CLEAR_CART'});

    return (
        <CartContext.Provider value={{
            cart: state.cart, 
            totalItems, // Añadimos totalItems aquí
            addToCart, 
            removeFromCart, 
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe usarse dentro de un CartProvider');
    }
    return context;
};