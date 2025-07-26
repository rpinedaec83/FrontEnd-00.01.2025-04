import { useContext } from 'react';
import { FavoritosContext } from '../contexts/FavoritosContext';

export const useFavoritos = () => {
  return useContext(FavoritosContext);
};
