import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import ProductItem from './ProductItem';

const ProductList = () => {
    const { addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductItem key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;