import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaBars, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';

import { useGetCategories } from '../../hooks/useGetCategories';
import useCart from '../../hooks/useCart';

export default function Navbar() {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const navigate = useNavigate();

  const { data: categories = [] } = useGetCategories();
  const { totalItems } = useCart();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/search?q=${search}`);
    setSearch('');
  };

  const handleCloseMenus = () => {
    setMenuOpen(false);
    setCategoriesOpen(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between gap-4 border-b border-border bg-white px-3 py-4 md:px-6">
        
        <button
          className="text-2xl text-accent lg:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>

        
        <div
          onClick={() => navigate('/')}
          className="h-[40px] w-[120px] shrink-0 cursor-pointer bg-[url('/src/assets/Logo-1.png')] bg-cover bg-center md:h-[50px] md:w-[150px] max-[965px]:h-[45px] max-[965px]:w-[45px] max-[767px]:bg-[url('/src/assets/LogoSmall.png')]"
        />

        
        <form
          onSubmit={handleSubmit}
          className="flex min-w-0 flex-1 justify-center"
        >
          <input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-[500px] min-w-0 rounded border border-grey bg-white px-3 py-2 text-sm text-textHeading outline-none focus:border-primary md:text-base"
          />
        </form>

        
        <div className="hidden items-center gap-2 lg:flex">
          <Link
            to="/"
            className="rounded-lg px-4 py-1 text-textHeading transition hover:bg-[#0060641a] hover:text-primary"
          >
            Inicio
          </Link>

          <Link
            to="/products"
            className="rounded-lg px-4 py-1 text-textHeading transition hover:bg-[#0060641a] hover:text-primary"
          >
            Productos
          </Link>

          <div className="group relative">
            <span className="cursor-pointer rounded-lg px-4 py-1 text-textHeading transition hover:bg-[#0060641a] hover:text-primary">
              Categorías
            </span>

            <div className="absolute left-0 top-full z-20 hidden max-h-[70vh] min-w-[220px] overflow-y-auto rounded-lg border border-border bg-white py-2 shadow-md group-hover:block">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  state={{
                    breadcrumb: ['Home', 'Productos', cat.name],
                  }}
                  className="block px-3 py-2 capitalize text-textHeading hover:bg-[#0060641a]"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            className="flex items-center justify-center rounded-full bg-ligthGrey p-2 transition hover:bg-gray-200"
            onClick={() => navigate('/favorites')}
          >
            <FaRegHeart className="h-6 w-6 text-textHeading" />
          </button>

          <button
            className="flex items-center gap-2 rounded-lg bg-accent px-1 py-2 text-white shadow transition hover:bg-[#d8432e] md:px-4"
            onClick={() => navigate('/shoppingcart')}
          >
            <div className="relative flex items-center justify-center">
              <FaShoppingCart className="h-6 w-6" />

              {totalItems > 0 && (
                <span className="absolute -right-2 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#c70c0c] px-[2px] text-[0.6rem] font-bold text-white">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </div>
          </button>
        </div>
      </nav>

      
      {menuOpen && (
        <div
          className="fixed inset-0 z-[9] bg-black/40"
          onClick={handleCloseMenus}
        />
      )}

      
      <div
        className={`fixed left-0 top-0 z-20 flex h-full w-[250px] flex-col gap-3 bg-white py-8 transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link
          to="/"
          onClick={handleCloseMenus}
          className="mx-2 rounded-lg px-4 py-2 text-textHeading transition hover:bg-[#0060641a] hover:text-primary"
        >
          Inicio
        </Link>

        <Link
          to="/products"
          onClick={handleCloseMenus}
          className="mx-2 rounded-lg px-4 py-2 text-textHeading transition hover:bg-[#0060641a] hover:text-primary"
        >
          Productos
        </Link>

        <div className="flex flex-col">
          <button
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            className="mx-2 rounded-lg px-4 py-2 text-left text-textHeading transition hover:bg-[#0060641a] hover:text-primary"
          >
            Categorías
          </button>

          <div
            className={`flex flex-col overflow-hidden transition-all duration-300 ${
              categoriesOpen ? 'max-h-[500px]' : 'max-h-0'
            }`}
          >
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                state={{
                  breadcrumb: ['Home', 'Productos', cat.name],
                }}
                onClick={handleCloseMenus}
                className="ml-6 rounded-lg px-4 py-2 capitalize text-textHeading transition hover:bg-[#0060641a] hover:text-primary"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}