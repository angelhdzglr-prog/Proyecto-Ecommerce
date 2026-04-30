import { useGetProductByCategory } from "../../hooks/useGetProductByCategory";
import CardProducts from "./CardProducts";

export default function CategorySection({ category }) {
  const { data: products = [], isLoading } =
    useGetProductByCategory(category.slug, 5);

  if (isLoading) return <p>Cargando {category.name}...</p>;

  return (
    <section>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-[#006064]">
          {category.name}
        </h3>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">
        {products.map((prod) => (
          <CardProducts key={prod.id} prod={prod} />
        ))}
      </div>
    </section>
  );
}