import { useSearchParams } from 'react-router-dom';
import { useGetProductsBySearch } from '../../hooks/useGetProductsBySearch';
import Spinner from '../../components/shared/Spinner';
import ListProducts from '../../components/products/ListProducts';

export default function SearchProducts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const page = Number(searchParams.get('page')) || 1;

  const limit = 12;

  const { data, isLoading, isError, error } = useGetProductsBySearch({
    search: query,
    page,
    limit,
  });

  const products = data?.products ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / limit);

  const changePage = (newPage) => {
    setSearchParams({
      q: query,
      page: newPage,
    });
  };

  if (isLoading) return <Spinner />;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-[1300px] mx-auto px-6 w-full">
      <h2 className="text-primary font-bold text-2xl my-4">Resultados para: "{query}"</h2>

      {products.length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        <>
          <ListProducts products={products} />

          <div className='text-center my-8'>
            <button
              onClick={() => changePage(page - 1)}
              disabled={page === 1}
              className='bg-primary text-white font-bold px-2 py-2 rounded-md'
            >
              Anterior
            </button>

            <span className='font-medium px-2'>
              Página {page} de {totalPages}
            </span>

            <button
              onClick={() => changePage(page + 1)}
              disabled={page === totalPages}
              className='bg-primary text-white font-bold px-2 py-2 rounded-md'
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
}
