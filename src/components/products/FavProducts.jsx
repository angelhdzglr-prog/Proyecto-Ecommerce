import toast from 'react-hot-toast';
import useCart from '../../hooks/useCart';
import useFav from '../../hooks/useFav';

export default function FavProducts({ fav }) {
  const { removeFav } = useFav();
  const { addCart } = useCart();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4 border-b border-[#ccc]">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <img
          src={fav.images[0]}
          alt={fav.title}
          className="h-[180px] object-contain"
        />

        <div>
          <h3 className="text-primary font-bold">
            {fav.title}
          </h3>

          {fav.brand && (
            <p className="text-textHeading">
              por <span className="uppercase">{fav.brand}</span>
            </p>
          )}

          <p className="text-textBasic text-sm">
            {fav.category}
          </p>

          <p className="text-accent font-extrabold text-2xl mt-5">
            {new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'MXN',
            }).format(fav.price)}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full md:w-[260px]">
        <button
          className="w-full p-[0.6rem] bg-ligthGrey text-textHeading font-semibold rounded-[8px] transition-all duration-300 hover:bg-error hover:text-white"
          onClick={() => {
            toast.error('Se eliminó de favoritos');
            removeFav(fav.id);
          }}
        >
          Eliminar de Favoritos
        </button>

        <button
          className="w-full p-[0.6rem] bg-accent text-white font-semibold rounded-[8px] transition-colors duration-200 hover:bg-accentHover"
          onClick={() => {
            toast.success('Se agregó al carrito');
            addCart(fav);
          }}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}