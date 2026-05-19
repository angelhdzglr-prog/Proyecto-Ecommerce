import { useState } from 'react';
import { useGetProducts } from '../../hooks/useGetProducts';
import Spinner from '../../components/shared/Spinner';
import ListProducts from '../../components/products/ListProducts';
import SkeletonCard from '../../components/skeletons/SkeletonCard';

export default function Products() {
  const [page, setPage] = useState(1);
  const limit = 15;

  const { data, isLoading, isError, error } = useGetProducts({page, limit})

  const products = data?.products ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / limit);

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-[1300px] mx-auto px-6 w-full">
      <h1 className='text-5xl font-extrabold py-4 text-primary'>Productos</h1>

      {isLoading ? (
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-6">
              {Array.from({ length: 10 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <ListProducts products={products} />
          )}

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
