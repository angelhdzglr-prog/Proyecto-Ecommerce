import { useParams } from "react-router-dom";
import { useGetProductById } from "../../hooks/useGetProductById";
import ProductMain from "../../components/products/ProductMain";
import ProductReviews from "../../components/products/ProductReviews";
import Spinner from "../../components/shared/Spinner";
import ProductSpecs from "../../components/products/ProductSpecs";
import BreadCrumb from "../../components/shared/BreadCrumb";
import SkeletonDetails from "../../components/skeletons/SkeletonDetails";
import SkeletonBreadcrumb from "../../components/skeletons/SkeletonBreadCrumb";

export default function ProductsDetails(){
    const {id} = useParams();
    const {data: datos ,isLoading, isError, error} = useGetProductById(id);

    if (isLoading) {
        return(
            <div>
                <SkeletonDetails />
                <SkeletonBreadcrumb />
            </div>
        ) 
    }

    if(isError) return <p>Error: {error.message}</p>

    return(
        <div>
            <BreadCrumb
        items={[
          { label: 'Home', path: '/' },
          { label: 'Productos', path: '/products' },
          { label: datos.category, path: `/category/${datos.category}` },
          { label: datos.title },
        ]}
      />
            <div className="max-w-[1300px] mx-auto px-6 w-full bg-white">
                <ProductMain datos={datos} />
                <ProductSpecs datos={datos} />
                <ProductReviews datos={datos} />
            </div>
        </div>
    )
}