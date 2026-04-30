import { Link } from "react-router-dom";
import Rating from "../shared/Rating";

export default function CardProducts({ prod }) {
  return (
    <Link
      to={`/products/${prod.id}`}
      className="flex flex-col justify-between border rounded-2xl bg-white transition pt-4 hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={prod.images[0]}
        alt={prod.title}
        className="h-[180px] object-contain w-full"
      />

      <div className="p-4">
        <h3 className="text-base font-semibold">{prod.title}</h3>
        <p className="text-2xl py-2 font-bold text-primary">
          $ {prod.price}
        </p>
        <Rating value={prod.rating}/>
        <p className="text-sm text-gray-500">{prod.category}</p>
        <button className="bg-accent text-sm text-fondo font-semibold w-full rounded-md p-2 my-2 hover:bg-accentHover">Agregar al carrito</button>
      </div>
    </Link>
  );
}