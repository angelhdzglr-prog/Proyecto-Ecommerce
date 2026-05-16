import { Link } from "react-router-dom";
import Rating from "../shared/Rating";
import useCart from "../../hooks/useCart";
import toast from "react-hot-toast";

export default function CardProducts({ prod }) {
  const { addCart } = useCart();
  return (
    <div className="flex flex-col justify-between border rounded-2xl p-4 bg-white transition pt-4 hover:-translate-y-1 hover:shadow-lg">
      <Link
      to={`/products/${prod.id}`}
      
    >
      <img
        src={prod.images[0]}
        alt={prod.title}
        className="h-[180px] object-contain w-full"
      />

      <div>
        <h3 className="text-base font-semibold">{prod.title}</h3>
        <p className="text-2xl py-2 font-bold text-primary">
          $ {prod.price}
        </p>
        <Rating value={prod.rating}/>
        <p className="text-sm text-gray-500">{prod.category}</p>
      </div>
    </Link>
    <button className="bg-accent text-sm text-fondo font-semibold w-full rounded-md p-2 my-2 hover:bg-accentHover" onClick={() => {
          addCart(prod);
          toast.success('Se agrego al carrito')
        }}>Agregar al carrito</button>
    </div>
  );
}