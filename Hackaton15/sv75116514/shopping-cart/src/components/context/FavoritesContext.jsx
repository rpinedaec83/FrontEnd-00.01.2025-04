import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  // Lee los favoritos del localStorage al iniciar
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Guarda favoritos en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (product) => {
    const exists = favorites.some((item) => item.id === product.id);
    if (!exists) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
