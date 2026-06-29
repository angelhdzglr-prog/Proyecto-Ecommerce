import { Link } from "react-router-dom";
import Rating from "../shared/Rating";
import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";
import useFav from "../../hooks/useFav";

import { FaRegHeart, FaHeart, FaHeartBroken } from "react-icons/fa";

export default function CardProducts({ prod }) {
  const { addCart } = useCart();
  const { addFav, favorites } = useFav();

  const isFavorite = favorites.some(
    (item) => item.id === prod.id
  );

  return (
    <div className="flex flex-col justify-between rounded-2xl bg-bgCard p-4 transition-all duration-150 hover:-translate-y-[6px] hover:shadow-xl">

      <button
        className="w-10 h-10 rounded-full bg-ligthGrey flex items-center justify-center border-none cursor-pointer self-end"
        onClick={(e) => {
          e.stopPropagation();

          if (isFavorite) {
            toast.error("Se eliminó de favoritos", {
              icon: (
                <FaHeartBroken
                  className="text-red-600"
                />
              ),
            });
          } else {
            toast.success("Se agregó a favoritos", {
              icon: (
                <FaHeart
                  className="text-green-700"
                />
              ),
            });
          }

          addFav(prod);
        }}
      >
        {isFavorite ? (
          <FaHeart className="w-5 h-5 text-red-500"/>
        ) : (
          <FaRegHeart className="w-5 h-5 text-textHeading" />
        )}
      </button>

      <Link
        to={`/products/${prod.id}`}
        state={{
          breadcrumb: [
            "Home",
            prod.category,
            prod.title,
          ],
        }}
        className="flex flex-col flex-1 justify-between pb-4 no-underline"
      >
        <img
          src={prod.images[0]}
          alt={prod.title}
          className="h-[180px] w-full object-contain transition-all duration-150"
        />

        <div>
          <h3 className="text-base font-semibold">
            {prod.title}
          </h3>

          <Rating value={prod.rating} />

          <p className="text-[1.2rem] font-bold text-primary">
            $ {prod.price}
          </p>

          <p className="text-[0.8rem] text-textBasiccapitalize">
            {prod.category}
          </p>
        </div>
      </Link>

      <button
        className="w-full rounded-md bg-accent p-[0.6rem] font-semibold text-white transition-colors duration-200 hover:bg-[#d8432e]"
        onClick={() => {
          toast.success("Se agrego al carrito");
          addCart(prod);
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}