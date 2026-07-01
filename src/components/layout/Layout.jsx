import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from '../shared/Footer';
import useCart from '../../hooks/useCart';
import { FaShoppingCart } from 'react-icons/fa';


export default function Layout() {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const showFloatingCart =
    totalItems > 0 && location.pathname !== '/shoppingcart';


  return (
    <div className="min-h-[100vh] flex flex-col">
      <Navbar />

      <main className="flex-1 bg-white">
        <Outlet />
        { showFloatingCart && 
        <button
          className="
            fixed
            bottom-32
            right-2
            z-[8]
            flex
            items-center
            justify-center
            h-[50px]
            w-[50px]
            rounded-full
            bg-accent
            text-white
            shadow-[0_8px_20px_rgba(0,0,0,0.25)]
            opacity-80
            transition-all
            duration-150
            ease-in-out
            hover:scale-105
            hover:opacity-100
            "
          onClick={() => navigate('/shoppingcart')}
        >
        <div className="relative flex items-center justify-center">
          <FaShoppingCart className="h-6 w-6" />
        { totalItems > 0 && (
            <span className="absolute -right-[.4rem] md:-right-2 -top-1 flex h-[14px] min-w-[14px] md:h-[18px] md:min-w-[18px] items-center justify-center rounded-full bg-error px-[2px] text-[0.6rem] font-bold text-white">
              {totalItems > 99 ? '99+' : totalItems}
            </span>
        )}
        </div>
      </button>}
      </main>

      <Footer />
    </div>
  );
}
