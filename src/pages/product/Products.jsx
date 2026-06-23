import { useState } from 'react';
import { useGetProducts } from '../../hooks/useGetProducts';

import ListProducts from '../../components/products/ListProducts';
import FilterSidebar from '../../components/products/FilterSidebar';
import ProductsToolbar from '../../components/products/ProductsToolbar';

import SkeletonCard from '../../components/skeletons/SkeletonCard';
import SkeletonFilter from '../../components/skeletons/SkeletonFilter';
import SkeletonToolbar from '../../components/skeletons/SkeletonToolbar';
import ProductsContent from '../../components/products/ProductsContent';
import { Helmet } from 'react-helmet-async';

export default function Products() {
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

  if (isError) {
    return (
      <p className="text-red-500 font-semibold">
        Error: {error.message}
      </p>
    );
  }

  return (
    <>
    <Helmet>
            <title>Productos | Emarket</title>
            <meta
              name="description"
              content="Encuentra lo que estes buscando."
            />
    </Helmet>
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 w-full">
      <ProductsContent
              title="Productos"
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
    </>
  );
}