import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Favorites = () => {
    const { favorites, removeFromFavorites } = useContext(CartContext);

    return (
        <div>
            <h2>Favoritos</h2>
            {favorites.length === 0 ? (
                <p>No tienes productos en tus favoritos.</p>
            ) : (
                <ul>
                    {favorites.map((product) => (
                        <li key={product.id}>
                            <h3>{product.title}</h3>
                            <button onClick={() => removeFromFavorites(product.id)}>Eliminar de Favoritos</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Favorites;