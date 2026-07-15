import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  FaRegHeart,
  FaHeart,
  FaHeartBroken,
  FaShareAlt,
} from 'react-icons/fa';
import useFav from '../../hooks/useFav';


export default function ProductGallery({ images, datos }) {
  const [selected, setSelected] = useState(images[0]);

  const { addFav, favorites } = useFav();

  const isFavorite = favorites.some(
    (item) => item.id === datos.id
  );

  const handleImageChange = (img) => {
    setSelected(img);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: datos.title,
          text: `${datos.title} por solo $${datos.price} en Emarket`,
          url: window.location.href,
        });
      } catch {}
    } else {
      await navigator.clipboard.writeText(
        window.location.href
      );

      toast.success('Enlace copiado al portapapeles');
    }
  };

  return (
    <div className="grid grid-cols-[90px_1fr] gap-2 max-[720px]:grid-cols-1 items-center">
      <div className="flex flex-col gap-[0.3rem] max-[720px]:order-2 max-[720px]:w-full max-[720px]:flex-row max-[720px]:flex-wrap max-[720px]:justify-center">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${datos.title} ${i + 1}`}
            loading="lazy"
            onClick={() => handleImageChange(img)}
            className={`h-[60px] w-[60px] cursor-pointer rounded-md border-2 object-contain transition-all duration-200 ${
              selected === img
                ? 'scale-[1.03] border-accent opacity-100'
                : 'border-transparent opacity-70 hover:opacity-100'
            }`}
          />
        ))}
      </div>

      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl bg-bgWhite max-[720px]:order-1">
        <img
          src={selected}
          alt={datos.title}
          className="max-h-[650px] w-full object-contain transition-opacity duration-200"
          loading="lazy"
        />

        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button
            aria-label="Agregar a favoritos"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ligthGrey shadow-md transition-all duration-200 hover:scale-105 hover:bg-borderGrey"
            onClick={() => {
              if (isFavorite) {
                toast.error('Se eliminó de favoritos', {
                  icon: (
                    <FaHeartBroken
                      style={{ color: 'red' }}
                    />
                  ),
                });
              } else {
                toast.success('Se agregó a favoritos', {
                  icon: (
                    <FaHeart
                      style={{ color: 'green' }}
                    />
                  ),
                });
              }

              addFav(datos);
            }}
          >
            {isFavorite ? (
              <FaHeart className="h-5 w-5 text-red-500" />
            ) : (
              <FaRegHeart className="h-5 w-5" />
            )}
          </button>

          <button
            aria-label="Compartir producto"
            onClick={handleShare}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ligthGrey shadow-md transition-all duration-200 hover:scale-105 hover:bg-borderGrey hover:text-blue-600"
          >
            <FaShareAlt />
          </button>
        </div>
      </div>
    </div>
  );
}