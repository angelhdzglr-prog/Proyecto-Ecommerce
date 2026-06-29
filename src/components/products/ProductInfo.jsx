import toast from 'react-hot-toast';
import {
  FaShoppingCart,
  FaRegHeart,
  FaHeart,
  FaHeartBroken,
} from 'react-icons/fa';

import Rating from '../shared/Rating';
import useCart from '../../hooks/useCart';
import useFav from '../../hooks/useFav';

export default function ProductInfo({ datos }) {
  const { addCart } = useCart();
  const { addFav, favorites } = useFav();

  const isFavorite = favorites.some(
    (item) => item.id === datos.id
  );

  return (
    <div className="flex flex-col justify-between gap-6 p-8 max-[620px]:p-5">
      <h2 className="text-4xl font-bold text-primary leading-tight max-[620px]:text-2xl">
        {datos.title}
      </h2>

      <p className="text-[2.5rem] font-extrabold text-accent max-[620px]:text-3xl">
        $
        {new Intl.NumberFormat('de-DE').format(datos.price)}
      </p>

      <Rating value={datos.rating} />

      <div className="flex flex-col gap-3 w-full">
        <button
          className="
            w-full
            rounded-md
            bg-primary
            py-3
            font-semibold
            text-white
            transition
            hover:bg-primaryHover
          "
        >
          Comprar ahora
        </button>

        <button
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-md
            bg-accent
            py-3
            font-semibold
            text-white
            transition
            hover:bg-accentHover
          "
          onClick={() => {
            toast.success('Se agrego al carrito');
            addCart(datos);
          }}
        >
          <FaShoppingCart className="text-xl" />

          Agregar al carrito
        </button>

        <button
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-md
            bg-ligthGrey
            py-3
            font-semibold
            text-textHeading
            transition
            hover:bg-error
            hover:text-white
          "
          onClick={() => {
            if (isFavorite) {
              toast.error('Se eliminó de favoritos', {
                icon: <FaHeartBroken style={{ color: 'red' }} />,
              });
            } else {
              toast.success('Se agregó a favoritos', {
                icon: <FaHeart style={{ color: 'green' }} />,
              });
            }

            addFav(datos);
          }}
        >
          {isFavorite ? (
            <FaHeart className="text-xl text-red-500" />
          ) : (
            <FaRegHeart className="text-xl" />
          )}

          Agregar a favoritos
        </button>
      </div>

      <div className="space-y-2 text-textHeading">
        <p>
          <strong className="text-primary">
            SKU:{' '}
          </strong>
          {datos.sku}
        </p>

        {datos.brand && (
          <p>
            <strong className="text-primary">
              Marca:{' '}
            </strong>
            {datos.brand}
          </p>
        )}

        <p>
          <strong className="text-primary">
            Garantía:{' '}
          </strong>
          {datos.warrantyInformation}
        </p>
      </div>
    </div>
  );
}