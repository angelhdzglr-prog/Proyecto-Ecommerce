import { useParams } from 'react-router-dom';
import Spinner from '../../components/shared/Spinner';
import ListProducts from '../../components/products/ListProducts';
import { useGetProductByCategory } from '../../hooks/useGetProductByCategory';
import Footer from '../../components/shared/Footer';
import Breadcrumb from '../../components/shared/BreadCrumb';

export function CategoryPage() {
  const { slug } = useParams();

  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useGetProductByCategory(slug, 0);

  if (isLoading) return <Spinner />;
  if (isError) return <p className="error">Error: {error.message}</p>;

  console.log(products);

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Productos', path: '/products' },
          { label: slug },
        ]}
      />
      <div className="max-w-[1300px] mx-auto px-6 w-full">
        <h1 className='text-5xl font-extrabold py-4 text-primary capitalize'>{slug}</h1>
        {products.length === 0 ? (
          <p>No se encontraron productos</p>
        ) : (
          <ListProducts products={products} />
        )}
      </div>
      <Footer />
    </div>
  );
}
