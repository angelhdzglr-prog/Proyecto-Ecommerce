import { useEffect, useState } from 'react';
import Banner from '../components/shared/Banner';
import CategorySection from '../components/products/CategorySection';
import { useGetCategories } from '../hooks/useGetCategories';
import Spinner from '../components/shared/Spinner';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SkeletonBanner from '../components/skeletons/SkeletonBanner';

export default function Home() {
  const { data: categories = [], isLoading } = useGetCategories();

  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: 'Dale vida a tu cocina',
      description: 'Los mejores accesorios para tu cocina',
      image:
        'https://images.pexels.com/photos/17542995/pexels-photo-17542995.jpeg',
    },
    {
      id: 2,
      title: 'Ve por todo',
      description: 'Entrena con el mejor equipo',
      image:
        'https://images.pexels.com/photos/26705155/pexels-photo-26705155.jpeg',
    },
    {
      id: 3,
      title: 'Gadgets',
      description: 'Facilita tu vida',
      image:
        'https://images.pexels.com/photos/10104284/pexels-photo-10104284.jpeg',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const furniture = categories.find((c) => c.slug === 'furniture');
  const smartphones = categories.find((c) => c.slug === 'smartphones');
  const laptops = categories.find((c) => c.slug === 'laptops');

  const mobileAccessories = categories.find(
    (c) => c.slug === 'mobile-accessories'
  );

  return (
    <div>
      <div className="w-full md:max-w-[1400px] md:mx-auto md:px-6 px-4">
        {isLoading ? (
          <SkeletonBanner />
        ) : (
          <div className="relative w-full md:h-[75vh] h-[45vh] overflow-hidden flex items-center justify-center">
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          <div className="relative z-10 w-full h-full bg-black/30 flex items-center justify-between px-4 md:px-8">

            <button
              onClick={prevSlide}
              className="text-3xl bg-bgWhite/20 hover:bg-bgWhite/40 transition rounded-full p-3 text-white"
            >
              <IoIosArrowBack />
            </button>

            <div className="text-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 text-primary">
                {slides[currentIndex].title}
              </h2>

              <p className="text-base md:text-xl">
                {slides[currentIndex].description}
              </p>
            </div>

            <button
              onClick={nextSlide}
              className="text-3xl bg-bgWhite/20 hover:bg-bgWhite/40 transition rounded-full p-3 text-white"
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        )}

        <section className="my-12">
          <h2 className="text-3xl font-bold text-[#006064] mb-4">
            Gadgets
          </h2>

          {mobileAccessories && (
            <CategorySection category={mobileAccessories} />
          )}
        </section>

        <Banner
          image="https://images.pexels.com/photos/8763072/pexels-photo-8763072.jpeg"
          titulo="Mueblería"
          text="Renueva tu hogar con estilo"
          little
        />

        <section className="my-12">
          <h2 className="text-3xl font-bold text-[#006064] mb-4">
            Muebles para tu hogar
          </h2>

          {furniture && (
            <CategorySection category={furniture} />
          )}
        </section>

        <Banner
          image="https://images.pexels.com/photos/17689341/pexels-photo-17689341.jpeg"
          titulo="Smartphones"
          text="La última tecnología en la palma de tu mano."
          little
        />

        <section className="my-12">
          <h2 className="text-3xl font-bold text-[#006064] mb-4">
            Smartphones más vendidos
          </h2>

          {smartphones && (
            <CategorySection category={smartphones} />
          )}
        </section>

        <Banner
          image="https://images.pexels.com/photos/17689341/pexels-photo-17689341.jpeg"
          titulo="Tu mejor opción esta aquí"
          text="Descubre nuestros increíbles precios"
          little
        />

        <section className="my-12">
          <h2 className="text-3xl font-bold text-[#006064] mb-4">
            Laptops recomendadas
          </h2>

          {laptops && (
            <CategorySection category={laptops} />
          )}
        </section>

        <Banner
          image="https://images.pexels.com/photos/17689341/pexels-photo-17689341.jpeg"
          titulo="Tu mejor opción esta aquí"
          text="Descubre nuestros increíbles precios"
          little
        />
      </div>
    </div>
  );
}