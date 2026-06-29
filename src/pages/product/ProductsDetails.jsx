import { useParams } from "react-router-dom";
import { useGetProductById } from "../../hooks/useGetProductById";
import ProductMain from "../../components/products/ProductMain";
import ProductReviews from "../../components/products/ProductReviews";
import ProductSpecs from "../../components/products/ProductSpecs";
import BreadCrumb from "../../components/shared/BreadCrumb";
import SkeletonDetails from "../../components/skeletons/SkeletonDetails";
import SkeletonBreadcrumb from "../../components/skeletons/SkeletonBreadcrumb";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import CategorySection from "../../components/products/CategorySection";


export default function ProductsDetails(){
  const { id } = useParams();

  const {
    data: datos,
    isLoading,
    isError,
    error,
  } = useGetProductById(id);

  useEffect(() => {
    if (datos?.title) {
      document.title = `${datos.title} | Emarket`;
    }
  }, [datos?.title]);

  if (isLoading) {
    return (
      <div>
        <SkeletonDetails />
        <SkeletonBreadcrumb />
      </div>
    );
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }
    return(
        <>
        <div>
            <BreadCrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Productos', path: '/products' },
          { label: datos.category, path: `/category/${datos.category}` },
          { label: datos.title },
        ]}
      />
            <div className="max-w-[1300px] mx-auto px-6 w-full bg-bgWhite">
                <ProductMain datos={datos} />
                <div style={{ margin: '2rem 0' }}>
                  <h3 className="font-extrabold">Tambien te podria interesar:</h3>
                  <CategorySection category={datos.category} />
                </div>
                <ProductSpecs datos={datos} />
                <ProductReviews datos={datos} />
            </div>
        </div>
        </>
    )
}