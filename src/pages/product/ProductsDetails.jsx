import { useParams } from "react-router-dom";
import { useGetProductById } from "../../hooks/useGetProductById";
import ProductMain from "../../components/products/ProductMain";
import ProductReviews from "../../components/products/ProductReviews";
import Footer from '../../components/shared/Footer';
import Spinner from "../../components/shared/Spinner";
import ProductSpecs from "../../components/products/ProductSpecs";
import BreadCrumb from "../../components/shared/BreadCrumb";
import SkeletonDetails from "../../components/skeletons/SkeletonDetails";

export default function ProductsDetails(){
    const {id} = useParams();
    const {data: datos ,isLoading, isError, error} = useGetProductById(id);

    if (isLoading) {
        return <SkeletonDetails />;
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
            <Footer />
        </div>
    )
}