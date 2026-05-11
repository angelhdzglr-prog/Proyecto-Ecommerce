import Banner from "../components/shared/Banner";
import CategorySection from "../components/products/CategorySection";
import { useGetCategories } from "../hooks/useGetCategories";
import Spinner from "../components/shared/Spinner";
import Footer from "../components/shared/Footer";

export default function Home() {
  const { data: categories = [], isLoading } = useGetCategories();

  if (isLoading) return <Spinner />;

  const furniture = categories.find((c) => c.slug === "furniture");
  const smartphones = categories.find((c) => c.slug === "smartphones");
  const laptops = categories.find((c) => c.slug === "laptops");

  return (
    <div>
      <div className="max-w-[1300px] mx-auto px-6 w-full">
      <Banner
        image="../src/assets/muebleria-2.jpg"
        titulo="Mueblería"
        text="Renueva tu hogar con estilo"
      />

      <section className="my-12">
        <h2 className="text-3xl font-bold text-[#006064] mb-4">
          Muebles para tu hogar
        </h2>
        {furniture && <CategorySection category={furniture} />}
      </section>

      <Banner
        image="../src/assets/banner-1.jpg"
        titulo="Smartphones"
        text="La última tecnología en la palma de tu mano."
        little
      />

      <section className="my-12">
        <h2 className="text-3xl font-bold text-[#006064] mb-4">
          Smartphones más vendidos
        </h2>
        {smartphones && <CategorySection category={smartphones} />}
      </section>

      <Banner
        image="../src/assets/laptops-4.jpg"
        titulo="Tu mejor opción esta aquí"
        text="Descubre nuestros increíbles precios"
        little
      />

      <section className="my-12">
        <h2 className="text-3xl font-bold text-[#006064] mb-4">
          Laptops recomendadas
        </h2>
        {laptops && <CategorySection category={laptops} />}
      </section>

      <Banner
        image="https://images.pexels.com/photos/17689341/pexels-photo-17689341.jpeg"
        titulo="Tu mejor opción esta aquí"
        text="Descubre nuestros increíbles precios"
        little
      />
    </div>
    <Footer />
  </div>
  );
}