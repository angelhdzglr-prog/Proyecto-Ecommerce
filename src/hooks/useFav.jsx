import { useContext } from 'react';
import { ContextFav } from '../context/FavContext'

export default function useFav() {
  const context = useContext(ContextFav);
  return context;
}
