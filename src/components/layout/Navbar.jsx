import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
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
      <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-200 bg-white gap-8">
        
        <button
          className="text-[#ec5840] text-2xl md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
        
        <div
          onClick={() => navigate('/')}
          className="w-[150px] h-[50px] bg-[url('/src/assets/Logo-1.png')] bg-cover bg-center cursor-pointer shrink-0 md:bg-[url('/src/assets/Logo-1.png')] max-[965px]:bg-[url('/src/assets/LogoSmall.png')] max-[965px]:w-[50px]"
        />
        
        <form onSubmit={handleSubmit} className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[30vw] max-[965px]:w-[40vw] px-3 py-2 border border-gray-300 rounded"
          />
        </form>
        
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/"
            className="px-4 py-1 rounded-lg text-gray-900 hover:bg-[#0060641a] hover:text-[#006064] transition"
          >
            Inicio
          </Link>

          <Link
            to="/products"
            className="px-4 py-1 rounded-lg text-gray-900 hover:bg-[#0060641a] hover:text-[#006064] transition"
          >
            Productos
          </Link>

          
          <div className="relative group">
            <span className="px-4 py-1 rounded-lg text-gray-900 cursor-pointer hover:bg-[#0060641a] hover:text-[#006064]">
              Categorías
            </span>

            <div className="absolute left-0 top-full bg-white border border-gray-200 rounded-lg py-2 hidden group-hover:block min-w-[200px] z-20">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="block px-3 py-1 text-gray-900 hover:bg-[#0060641a]"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <button
  className="ml-4 flex items-center gap-3 rounded-[10px] bg-[#ec5840] px-4 py-2 text-white font-semibold shadow transition hover:bg-[#d8432e] max-[480px]:p-2 max-[480px]:m-0"
  onClick={() => navigate('/shoppingcart')}
>
  <div className="relative flex items-center justify-center">
    <FaShoppingCart className="h-6 w-6" />

    {totalItems > 0 && (
      <span className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#c70c0c] px-1 text-[0.75rem] font-bold text-white">
        {totalItems > 99 ? '99+' : totalItems}
      </span>
    )}
  </div>

  <span className="max-[480px]:hidden">Carrito</span>
</button>
      </nav>
      
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[9]"
	  onClick={handleCloseMenus}
        />
      )}
      
      <div
        className={`fixed top-0 left-0 w-[250px] h-full bg-white py-8 flex flex-col gap-4 z-10 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link
          to="/"
          onClick={handleCloseMenus}
          className="px-4 py-1"
        >
          Inicio
        </Link>

        <Link
          to="/products"
          onClick={handleCloseMenus}
          className="px-4 py-1"
        >
          Productos
        </Link>

        <div className="flex flex-col">
          <button
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            className="text-left px-4 py-1 hover:bg-[#0060641a]"
          >
            Categorías
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 flex flex-col ${
              categoriesOpen ? 'max-h-[500px]' : 'max-h-0'
            }`}
          >
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
		        onClick={handleCloseMenus}
                className="pl-8 py-1 hover:bg-[#0060641a]"
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
