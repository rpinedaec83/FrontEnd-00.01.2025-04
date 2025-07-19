import { useEffect, useState } from 'react';

let _globalFavoritos = [];
let _setGlobalFavoritos = () => {};

export const useFavoritos = () => {
  const [favoritos, setFavoritos] = useState(() => {
    const guardados = localStorage.getItem('favoritos');
    return guardados ? JSON.parse(guardados) : [];
  });

  // sincronizar con otros componentes
  useEffect(() => {
    _globalFavoritos = favoritos;
    _setGlobalFavoritos = setFavoritos;
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (producto) => {
    const existe = favoritos.some((p) => p.id === producto.id);
    const nuevos = existe
      ? favoritos.filter((p) => p.id !== producto.id)
      : [...favoritos, producto];
    setFavoritos(nuevos);
  };

  return { favoritos, toggleFavorito };
};

// útil si solo necesitas la cantidad desde fuera del componente
export const getFavoritosCount = () => _globalFavoritos.length;
