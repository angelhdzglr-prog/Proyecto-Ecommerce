import { useContext } from 'react';
import { ContextCart } from '../context/CartContext';

export default function useCart() {
  const context = useContext(ContextCart);
  return context;
}
