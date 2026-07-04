import { useContext } from 'react';
import { RecentlyContext } from '../context/RecentlySeenContext';

export default function useSeen() {
  const context = useContext(RecentlyContext);
  return context;
}
