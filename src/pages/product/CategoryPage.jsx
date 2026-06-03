import { useParams } from 'react-router-dom';
import Spinner from '../../components/shared/Spinner';
import ListProducts from '../../components/products/ListProducts';
import SkeletonCard from '../../components/skeletons/SkeletonCard';
import BreadCrumb from '../../components/shared/BreadCrumb';
import { useState } from 'react';
import { useGetProductByCategory } from '../../hooks/useGetProductByCategory';

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
      <div className="max-w-[1300px] mx-auto px-6 w-full">
        <h1 className='text-5xl font-extrabold py-4 text-primary capitalize'>{slug}</h1>
        {isLoading ? (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
            {Array.from({ length: 10 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : products.length === 0 ? (
          <p>No se encontraron productos</p>
        ) : (
          <ListProducts products={products} />
        )}
      </div>
    </div>
  );
}
