import { Children, createContext, useEffect, useState } from 'react';

export const RecentlyContext = createContext();

export const RecentlySeenContext = ({ children }) => {
  const [seen, setSeen] = useState(() => {
    const storeSeen = localStorage.getItem('seen');
    return storeSeen ? JSON.parse(storeSeen) : [];
  });

  const addSeen = (prod) => {
    setSeen((prev) => {
      const filtered = prev.filter((p) => p.id !== prod.id);

      const updated = [...filtered, prod];

      return updated.slice(-5);
    });
  };

  useEffect(() => {
    localStorage.setItem('seen', JSON.stringify(seen));
  }, [seen]);

  return (
    <RecentlyContext.Provider value={{ seen, setSeen, addSeen }}>
      {children}
    </RecentlyContext.Provider>
  );
};