import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Products from "./pages/product/Products";
import DetailsProduct from "./pages/product/DetailsProduct";
import Home from "./pages/Home";
import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import SearchProducts from "./pages/product/SearchProducts";

function App() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/search?q=${search}`);
    setSearch('');
  };

  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-200 bg-white">
        <img
          src="/src/assets/Logo-1.png"
          alt="Logo"
          className="w-[150px] cursor-pointer"
          onClick={() => navigate('/')}
        />

        <form onSubmit={handleSubmit} className="w-2/5">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-1 text-lg border-2"
          />
        </form>

        <div className="flex items-center">
          <Link
            to="/"
            className="mx-2 px-4 py-1 rounded-lg text-gray-900 hover:bg-[#0060641a] hover:text-[#006064] transition"
          >
            Inicio
          </Link>

          <Link
            to="/products"
            className="mx-2 px-4 py-1 rounded-lg text-gray-900 hover:bg-[#0060641a] hover:text-[#006064] transition"
          >
            Productos
          </Link>
          <button className="bg-accent text-white font-bold py-3 px-6 flex items-center rounded-md hover:cursor-pointer transition hover:-translate-y-1 hover:shadow-lg"><FaShoppingCart className="w-7 h-7+ pr-2"/> Carrito</button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<DetailsProduct />} />
        <Route path="/search" element={<SearchProducts />} />
      </Routes>
    </>
  );
}

export default App;