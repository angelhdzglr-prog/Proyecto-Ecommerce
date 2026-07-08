import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from '../shared/Footer';
import useCart from '../../hooks/useCart';
import { FaShoppingCart } from 'react-icons/fa';
import { useEffect, useState } from 'react';


export default function Layout() {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const [animateCart, setAnimateCart] = useState(false);

  const showFloatingCart =
    totalItems > 0 &&
    location.pathname !== '/shoppingcart';

  useEffect(() => {
    if (totalItems === 0) return;

    setAnimateCart(true);

    const timer = setTimeout(() => {
      setAnimateCart(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [totalItems]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-white">
        <Outlet />

        {showFloatingCart && (
          <button
            onClick={() => navigate('/shoppingcart')}
            aria-label="Ir al carrito de compras"
            className={`
              fixed bottom-32 right-2 z-[8]
              flex h-[50px] w-[50px] items-center justify-center
              rounded-full
              bg-accent
              text-white
              opacity-85
              shadow-[0_8px_20px_rgba(0,0,0,0.25)]
              transition-all
              duration-150
              hover:scale-105
              hover:cursor-pointer
              hover:opacity-100
              ${animateCart ? 'cartBounce' : ''}
            `}
          >
            <div className="relative flex items-center justify-center">
              <FaShoppingCart className="h-6 w-6" />

              {totalItems > 0 && (
                <span className="absolute -right-[10px] -top-[5px] flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-error px-[2px] text-[0.6rem] font-bold text-white">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </div>
          </button>
        )}
      </main>

      <Footer />
    </div>
  );
}