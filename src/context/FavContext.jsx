import { useState, createContext, useEffect } from 'react';

export const ContextFav = createContext();

export const FavContext = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const storedFav = localStorage.getItem('favorites');

    return storedFav ? JSON.parse(storedFav) : [];
  });

  const addFav = (product) => {
    setFavorites((prev) => {
      const exist = prev.some((p) => p.id === product.id);

      if (exist) {
        return prev.filter((fav) => fav.id !== product.id);
      }

      return [...prev, product];
    });
  };

  const removeFav = (id) => {
    setFavorites((prev) => prev.filter((c) => c.id !== id));
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <ContextFav.Provider value={{ favorites, addFav, removeFav }}>
      {children}
    </ContextFav.Provider>
  );
};
