import { useSearchParams } from 'react-router-dom';
import { useGetProductsBySearch } from '../../hooks/useGetProductsBySearch';
import Spinner from '../../components/shared/Spinner';
import ListProducts from '../../components/products/ListProducts';
import ProductsContent from '../../components/products/ProductsContent';
import { useState } from 'react';

export default function SearchProducts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [page, setPage] = useState(1);
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

  const limit = 0;

  const { data, isLoading, isError, error } = useGetProductsBySearch({
   search: query,
   page: page,
   limit: limit,
   sortBy: currentSort?.sortBy,
   order: currentSort?.order,
  });

  const products = data?.products ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / limit);

  
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-[1300px] mx-auto px-6 w-full">
      <ProductsContent
        title={`Resultados para: "${query}"`}
        products={products}
        isLoading={isLoading}
        sortBy={sortBy}
        setSortBy={setSortBy}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        showPagination={isLoading}
        showToolbar
      />
    </div>
  );
}
