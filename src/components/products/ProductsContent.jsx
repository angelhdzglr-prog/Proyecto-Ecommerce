import { useMemo, useState } from 'react';

import ListProducts from './ListProducts';
import FilterSidebar from './FilterSidebar';
import ProductsPagination from './ProductsPagination';

import SkeletonCard from '../skeletons/SkeletonCard';
import SkeletonToolbar from '../skeletons/SkeletonToolbar';
import SkeletonFilter from '../skeletons/SkeletonFilter';

import ProductsEmpty from './ProductsEmpty';
import ProductsToolbar from './ProductsToolbar';

export default function ProductsContent({
  title,
  products = [],
  isLoading = false,
  sortBy,
  setSortBy,
  page,
  setPage,
  totalPages = 1,
  showPagination = true,
  showToolbar = true,
  showFilters = true,
}) {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    category: '',
    rating: '',
  });

  const [openFilters, setOpenFilters] = useState(false);

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

  return (
    <div className="max-w-[93vw] w-full mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold py-6 text-primary">
        {title}
      </h1>

      {showToolbar &&
  (isLoading ? (
    <SkeletonToolbar />
  ) : (
    <ProductsToolbar
      sortBy={sortBy}
      setSortBy={setSortBy}
    />
  ))}

      {showFilters && (
        <button
          className="md:hidden flex items-center gap-2 bg-accent text-white px-4 py-3 rounded-lg font-semibold mb-4 relative"
          onClick={() => setOpenFilters(true)}
        >
          Filtros

          {activeFiltersCount > 0 && (
            <span className="w-[18px] h-[18px] rounded-full bg-bgWhite text-accent text-sm font-bold flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </button>
      )}

      {showFilters && openFilters && (
        <div
          className={`fixed inset-0 bg-black/45 z-20 transition-opacity duration-300 ${
            openFilters
              ? 'opacity-100 visible'
              : 'opacity-0 invisible'
          }`}
          onClick={() => setOpenFilters(false)}
        />
      )}

      {showFilters && (
        <aside
          className={`fixed top-0 left-0 w-[85%] max-w-[320px] h-screen bg-bgWhite z-30 overflow-y-auto shadow-xl transition-transform duration-300 ${
            openFilters
              ? 'translate-x-0'
              : '-translate-x-full'
          }`}
        >
          <div className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-[#050505] bg-bgWhite">
            <h3 className="text-xl font-semibold text-textHeading">
              Filtros
            </h3>

            <button
              className="text-2xl text-textHeading"
              onClick={() => setOpenFilters(false)}
            >
              ✕
            </button>
          </div>

          <div className="p-4">
            {isLoading ? (
              <SkeletonFilter />
            ) : (
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                clearFilters={clearFilters}
                radioGroup="rating-mobile"
              />
            )}
          </div>
        </aside>
      )}

      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start">
        {showFilters && (
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
        )}

        <div>
          {isLoading ? (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <ProductsEmpty />
          ) : (
            <>
              <p className="my-4 text-textHeading">
                {filteredProducts.length} encontrados.
              </p>

              <ListProducts
                products={filteredProducts}
              />
            </>
          )}
        </div>
      </div>

      {showPagination &&
        !isLoading &&
        totalPages > 1 && (
          <ProductsPagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        )}
    </div>
  );
}