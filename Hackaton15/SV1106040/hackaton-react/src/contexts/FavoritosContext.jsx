import { createContext, useState, useEffect } from 'react';

export const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem('favoritos');
    return guardados ? JSON.parse(guardados) : [];
  });

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (producto) => {
    const existe = favoritos.find(p => p.id === producto.id);
    if (existe) {
      setFavoritos(favoritos.filter(p => p.id !== producto.id));
    } else {
      setFavoritos([...favoritos, producto]);
    }
  };

  const isFavorito = (id) => favoritos.some(p => p.id === id);

  const clearFavoritos = () => {
    setFavoritos([]);
    localStorage.removeItem('favoritos');
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito, isFavorito, clearFavoritos }}>
      {children}
    </FavoritosContext.Provider>
  );
};
