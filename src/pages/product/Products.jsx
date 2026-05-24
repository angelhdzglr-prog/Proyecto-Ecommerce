import { useMemo, useState } from 'react';
import { useGetProducts } from '../../hooks/useGetProducts';

import ListProducts from '../../components/products/ListProducts';
import FilterSidebar from '../../components/products/FilterSidebar';
import ProductsToolbar from '../../components/products/ProductsToolbar';

import SkeletonCard from '../../components/skeletons/SkeletonCard';
import SkeletonFilter from '../../components/skeletons/SkeletonFilter';
import SkeletonToolbar from '../../components/skeletons/SkeletonToolbar';

export default function Products() {
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    category: '',
    rating: '',
  });

  const [sortBy, setSortBy] = useState('');

  // Drawer mobile
  const [openFilters, setOpenFilters] = useState(false);

  const sortOptions = {
    'price-asc': {
      sortBy: 'price',
      order: 'asc',
    },

    'price-desc': {
      sortBy: 'price',
      order: 'desc',
    },

    'rating-desc': {
      sortBy: 'rating',
      order: 'desc',
    },
  };

  const currentSort = sortOptions[sortBy];

  const limit = 194;

  const { data, isLoading, isError, error } = useGetProducts({
    page,
    limit,
    sortBy: currentSort?.sortBy,
    order: currentSort?.order,
  });

  const products = data?.products ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / limit);

  const filteredProducts = useMemo(() => {
    let res = [...products];

    if (filters.minPrice) {
      res = res.filter((p) => p.price >= Number(filters.minPrice));
    }

    if (filters.maxPrice) {
      res = res.filter((p) => p.price <= Number(filters.maxPrice));
    }

    if (filters.category) {
      res = res.filter((p) => p.category === filters.category);
    }

    if (filters.rating) {
      res = res.filter(
        (p) => Math.floor(p.rating) === Number(filters.rating)
      );
    }

    return res;
  }, [products, filters]);

  const clearFilters = () => {
    setFilters({
      minPrice: '',
      maxPrice: '',
      category: '',
      rating: '',
    });
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  if (isError) {
    return (
      <p className="text-red-500 font-semibold">
        Error: {error.message}
      </p>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 w-full">
      <h1 className="text-4xl md:text-5xl font-extrabold py-6 text-primary">
        Productos
      </h1>

      {isLoading ? (
        <SkeletonToolbar />
      ) : (
        <ProductsToolbar
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      )}

      <button
        onClick={() => setOpenFilters(true)}
        className="md:hidden flex items-center gap-2 bg-accent text-white font-semibold px-4 py-3 rounded-lg mb-4 relative"
      >
        Filtros

        {activeFiltersCount > 0 && (
          <span className="bg-white text-accent rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {activeFiltersCount}
          </span>
        )}
      </button>

      <div
        onClick={() => setOpenFilters(false)}
        className={`
          fixed inset-0 bg-black/40 z-40 transition-all duration-300
          ${
            openFilters
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }
        `}
      />

      <aside
        className={`
          fixed top-0 left-0 h-screen w-[85%] max-w-[320px]
          bg-white z-50 overflow-y-auto
          shadow-2xl transition-all duration-300
          ${
            openFilters
              ? 'translate-x-0'
              : '-translate-x-full'
          }
        `}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <h3 className="text-xl font-bold">
            Filtros
          </h3>

          <button
            onClick={() => setOpenFilters(false)}
            className="text-2xl font-bold text-gray-700 hover:text-black"
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
            clearFilters={clearFilters}
            radioGroup="rating-mobile"
          />
        </div>
      </aside>

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start">
        
        <div className="hidden md:block">
          {isLoading ? (
            <SkeletonFilter />
          ) : (
            <div className="sticky top-4">
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                clearFilters={clearFilters}
                radioGroup="rating-desktop"
              />
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl">
          {isLoading ? (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                No se encontraron productos
              </h3>

              <p className="text-gray-500">
                Favor de cambiar los filtros
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-4 md:p-8">
              <p className="pb-4 text-gray-500 font-medium">
                {filteredProducts.length} productos encontrados
              </p>

              <ListProducts
                products={filteredProducts}
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 my-10">
        <button
          onClick={() =>
            setPage((prev) => Math.max(prev - 1, 1))
          }
          disabled={page === 1}
          className="
            bg-primary hover:bg-primary-hover
            disabled:bg-primary-light
            disabled:cursor-not-allowed
            text-white font-bold
            px-4 py-2 rounded-md
            transition
          "
        >
          Anterior
        </button>

        <span className="font-medium text-gray-700">
          Página {page} de {totalPages}
        </span>

        <button
          onClick={() =>
            setPage((prev) =>
              Math.min(prev + 1, totalPages)
            )
          }
          disabled={page === totalPages}
          className="
            bg-primary hover:bg-primary-hover
            disabled:bg-primary-light
            disabled:cursor-not-allowed
            text-white font-bold
            px-4 py-2 rounded-md
            transition
          "
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}