import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductItem = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product-item">
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
};

export default ProductItem;