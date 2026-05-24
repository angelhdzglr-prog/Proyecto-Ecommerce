import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

export default function ProductMain({ datos }) {
  return (
    <div className="grid grid-cols-2 gap-8 mb-8 max-[620px]:grid-cols-1">
      <ProductGallery images={datos.images} />
      <ProductInfo datos={datos} />
    </div>
  );
}