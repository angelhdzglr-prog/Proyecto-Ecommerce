import { createContext, useEffect, useState } from 'react';

export const ContextCart = createContext();

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');

    return storedCart ? JSON.parse(storedCart) : [];
  });

  const total = cart
    .reduce((c, car) => car.price * car.quantity + c, 0)
    .toFixed(2);

  const totalItems = cart.reduce((c, car) => Number(car.quantity) + c, 0);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addCart = (articulo) => {
    setCart((prev) => {
      const existProd = prev.find((c) => c.id === articulo.id);

      if (existProd) {
        return prev.map((c) =>
          c.id === articulo.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }

      return [...prev, { ...articulo, quantity: 1 }];
    });
  };

  const removeCart = (id) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const incrementQuantity = (id) => {
    setCart((prev) =>
      prev.map((c) =>
        c.id === id
          ? {
              ...c,
              quantity: Number(c.quantity) + 1,
            }
          : c
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((c) =>
          c.id === id ? { ...c, quantity: Number(c.quantity) - 1 } : c
        )
        .filter((c) => c.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (id, quantity) => {
    const newQuantity = quantity < 1 || isNaN(quantity) ? 1 : quantity;

    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item
      )
    );
  };

  return (
    <ContextCart.Provider
      value={{
        cart,
        addCart,
        removeCart,
        total,
        incrementQuantity,
        decrementQuantity,
        totalItems,
        clearCart,
        updateQuantity,
      }}
    >
      {children}
    </ContextCart.Provider>
  );
};
