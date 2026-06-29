import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import useCart from '../../hooks/useCart';
import useFav from '../../hooks/useFav';

export default function FavProducts({ fav }) {
  const { removeFav } = useFav();
  const { addCart } = useCart();

  return (
    <div
      className="
        grid
        grid-cols-[120px_minmax(0,1fr)_auto]
        items-center
        gap-12
        border
        border-border
        bg-bgCard
        p-8
        transition
        hover:shadow-md

        max-[720px]:grid-cols-[100px_1fr]

        max-[380px]:grid-cols-1
        max-[380px]:gap-0
      "
    >
      {/* Imagen */}
      <div className="flex gap-2 items-center max-[380px]:justify-center">
        <img
          src={fav.images[0]}
          alt={fav.title}
          className="
            h-[150px]
            w-[150px]
            shrink-0
            object-contain

            max-[380px]:h-[200px]
            max-[380px]:w-[200px]
          "
        />
      </div>

      {/* Información */}
      <div className="pb-4 max-[380px]:pb-4">
        <Link
          to={`/products/${fav.id}`}
          className="inline-block hover:underline"
        >
          <h3
            className="
              mb-4
              text-3xl
              font-semibold
              leading-8

              max-[720px]:text-lg
            "
          >
            {fav.title}
          </h3>
        </Link>

        {fav.brand && (
          <p>
            por{' '}
            <span className="uppercase">
              {fav.brand}
            </span>
          </p>
        )}

        <p className="text-sm text-textBasic">
          {fav.category}
        </p>

        <p className="text-sm text-textBasic">
          {fav.warrantyInformation}
        </p>

        <p className="text-sm text-textBasic">
          {fav.shippingInformation}
        </p>

        <p className="mt-5 text-xl font-medium text-accent">
          $ {fav.price}
        </p>
      </div>

      {/* Botones */}
      <div
        className="
          flex
          flex-col
          gap-2

          max-[720px]:col-span-2

          max-[380px]:col-span-1
        "
      >
        <button
          className="
            w-full
            rounded-md
            bg-accent
            py-2.5
            font-semibold
            text-white
            transition
            hover:bg-accentHover
          "
          onClick={() => {
            toast.success('Se agrego al carrito');
            addCart(fav);
          }}
        >
          Agregar al Carrito
        </button>

        <button
          className="
            w-full
            rounded-md
            bg-ligthGrey
            p-2.5
            font-semibold
            text-textHeading
            transition
            hover:bg-error
            hover:text-white
          "
          onClick={() => {
            toast.error('Se elimino de favoritos');
            removeFav(fav.id);
          }}
        >
          Eliminar de Favoritos
        </button>
      </div>
    </div>
  );
}