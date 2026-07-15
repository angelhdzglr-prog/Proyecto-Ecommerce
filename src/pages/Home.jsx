import { useEffect, useState } from 'react';
import Banner from '../components/shared/Banner';
import CategorySection from '../components/products/CategorySection';
import { useGetCategories } from '../hooks/useGetCategories';
import Spinner from '../components/shared/Spinner';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import SkeletonBanner from '../components/skeletons/SkeletonBanner';
import { Helmet } from 'react-helmet-async';
import useSeen from '../hooks/useSeen';
import ListProducts from '../components/products/ListProducts';

export default function Home() {
  const { data: categories = [], isLoading } = useGetCategories();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const { seen } = useSeen();

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
  }, [currentIndex, isAnimating]);

  const changeSlide = (direction) => {
    if (isAnimating) return;

    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % slides.length
        : (currentIndex - 1 + slides.length) % slides.length;

    setNextIndex(newIndex);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setNextIndex(null);
      setIsAnimating(false);
    }, 450);
  };

  const nextSlide = () => changeSlide('next');
  const prevSlide = () => changeSlide('prev');

  const furniture = categories.find((c) => c.slug === 'furniture');
  const smartphones = categories.find((c) => c.slug === 'smartphones');
  const laptops = categories.find((c) => c.slug === 'laptops');

  const mobileAccessories = categories.find(
    (c) => c.slug === 'mobile-accessories'
  );

  return (
    <>
    <Helmet>
        <title>Inicio | Emarket</title>
        <meta
          name="description"
          content="Encuentra los mejores productos para tu hogar, tecnología y más."
        />
      </Helmet>
    <div>
      <div className="w-full md:max-w-[1400px] md:mx-auto md:px-14 px-4">
        {isLoading ? (
          <SkeletonBanner />
        ) : (
          <div className="relative flex h-[75vh] w-full items-center justify-center overflow-hidden">
  <img
    src={slides[currentIndex].image}
    alt={slides[currentIndex].title}
    loading="lazy"
    className={`
      absolute inset-0 h-full w-full object-cover
      transition-all duration-500 ease-in-out
      ${isAnimating ? 'opacity-0 scale-105 animate-[kenBurns_8s_linear_forwards]' : 'opacity-100 scale-100 animate-[kenBurns_8s_linear_forwards]'}
    `}
  />

  {nextIndex !== null && (
    <img
      src={slides[nextIndex].image}
      alt={slides[nextIndex].title}
      loading="lazy"
      className="
        absolute inset-0 h-full w-full object-cover
        animate-[bannerFade_1s_ease]
      "
    />
  )}

  <div className="relative z-10 flex h-full w-full items-center justify-between bg-black/45 px-5 text-center text-white">
    <button
      onClick={prevSlide}
      aria-label="Imagen anterior"
      className="
        flex items-center rounded-full
        bg-primary/40 p-3
        text-accent
        transition-all
        hover:cursor-pointer
        hover:bg-primary/60
      "
    >
      <IoIosArrowBack className="text-2xl" />
    </button>

    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold md:text-5xl">
        {slides[currentIndex].title}
      </h2>

      <p className="mt-4 text-lg">
        {slides[currentIndex].description}
      </p>
    </div>

    <button
      onClick={nextSlide}
      aria-label="Siguiente imagen"
      className="
        flex items-center rounded-full
        bg-primary/40 p-3
        text-accent
        transition-all
        hover:cursor-pointer
        hover:bg-primary/60
      "
    >
      <IoIosArrowForward className="text-2xl" />
    </button>
  </div>
</div>
        )}

        {seen.length > 0 && (
          <section className="my-12">
            <h3 className="text-2xl font-bold text-primary mb-4" >Vuelve a ver estos productos</h3>
            <ListProducts products={[...seen].reverse()} />
          </section>
        )}

        <section className="my-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Gadgets
          </h2>

          {mobileAccessories && (
            <CategorySection category={mobileAccessories.slug} />
          )}
        </section>

        <Banner
          image="https://images.pexels.com/photos/8763072/pexels-photo-8763072.jpeg"
          titulo="Diseña el hogar que imaginas"
          text="Muebles modernos que combinan comodidad, calidad y estilo."
          little
        />

        <section className="my-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Muebles para tu hogar
          </h2>

          {furniture && (
            <CategorySection category={furniture.slug} />
          )}
        </section>

        <Banner
          image="https://images.pexels.com/photos/17689341/pexels-photo-17689341.jpeg"
          titulo="Mantente Conectado"
          text="Los smartphones más innovadores con el mejor rendimiento."
          little
        />

        <section className="my-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Smartphones más vendidos
          </h2>

          {smartphones && (
            <CategorySection category={smartphones.slug} />
          )}
        </section>

        <Banner
          image="https://images.pexels.com/photos/17689341/pexels-photo-17689341.jpeg"
          titulo="Potencia para cada proyecto"
          text="Laptops diseñadas para trabajar, estudiar y crear sin límites."
          little
        />

        <section className="my-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Laptops recomendadas
          </h2>

          {laptops && (
            <CategorySection category={laptops.slug} />
          )}
        </section>

        <Banner
          image="https://images.pexels.com/photos/17689341/pexels-photo-17689341.jpeg"
          titulo="Ofertas que no querrás perder"
          text="Encuentra productos seleccionados con precios increíbles por tiempo limitado."
          little
        />
      </div>
    </div>
    </>
  );
}