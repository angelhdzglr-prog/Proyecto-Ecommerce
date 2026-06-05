import { useParams } from 'react-router-dom';
import Spinner from '../../components/shared/Spinner';
import ListProducts from '../../components/products/ListProducts';
import SkeletonCard from '../../components/skeletons/SkeletonCard';
import BreadCrumb from '../../components/shared/BreadCrumb';
import { useState } from 'react';
import { useGetProductByCategory } from '../../hooks/useGetProductByCategory';
import ProductsContent from '../../components/products/ProductsContent';

export function CategoryPage() {
  const { slug } = useParams();
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

  const limit = 30;

  const { data, isLoading, isError, error } = useGetProductByCategory({
    slug: slug,
    page: page,
    limit: limit,
    sortBy: currentSort?.sortBy,
    order: currentSort?.order,
  });

  const products = data?.products ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / limit);

  if (isError) return <p className="error">Error: {error.message}</p>;

  return (
    <div>
      <BreadCrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Productos', path: '/products' },
          { label: slug },
        ]}
      />
      <ProductsContent 
      title={slug}
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
