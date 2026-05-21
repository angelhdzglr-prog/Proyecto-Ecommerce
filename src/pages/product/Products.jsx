import { useMemo, useState } from 'react';
import { useGetProducts } from '../../hooks/useGetProducts';
import Spinner from '../../components/shared/Spinner';
import ListProducts from '../../components/products/ListProducts';
import SkeletonCard from '../../components/skeletons/SkeletonCard';
import FilterSidebar from '../../components/products/FilterSidebar';
import ProductsToolbar from '../../components/products/ProductsToolbar';

export default function Products() {
  const [page, setPage] = useState(1);

  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    category: '',
    rating: '',
  });

  const [sortBy, setSortBy] = useState('');

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
      res = res.filter((p) => Math.floor(p.rating) === Number(filters.rating));
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

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-[1300px] mx-auto px-6 w-full">
      <h1 className='text-5xl font-extrabold py-4 text-primary'>Productos</h1>
      <ProductsToolbar sortBy={sortBy} setSortBy={setSortBy} />
        <div className='grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start'>
          <div>
            <FilterSidebar filters={filters}
                setFilters={setFilters}
                clearFilters={clearFilters}/> 
          </div>
          {isLoading ? (
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div>
              <h3>No se encontraron productos.</h3>
              <p>Favor de cambiar los filtros</p>
            </div>
          ) : (
            <div className='bg-white p-8'>
              <p style={{ padding: '1rem 0' }}>
                {filteredProducts.length} productos encontrados
              </p>
              <ListProducts products={filteredProducts} />
            </div>
          )}
        </div>

      <div className='text-center my-8'>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className='bg-primary text-white font-bold px-2 py-2 rounded-md'
        >
          Anterior
        </button>

        <span className='font-medium px-2'>
          Página {page} de {totalPages}
        </span>

        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className='bg-primary text-white font-bold px-2 py-2 rounded-md'
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
