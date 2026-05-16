import toast from 'react-hot-toast';
import { FaShoppingCart } from 'react-icons/fa';
import Rating from '../shared/Rating';
import useCart from '../../hooks/useCart';

export default function ProductInfo({ datos }) {
  const { addCart } = useCart();
  return (
    <div className="flex flex-col justify-around items-start p-8">
      
      <h2 className="text-4xl max-[620px]:text-2xl font-bold text-[#006064]">
        {datos.title}
      </h2>

      <p className="text-[#ec5840] text-[2.5rem] max-[620px]:text-2xl font-extrabold">
        ${datos.price}
      </p>

      <Rating value={datos.rating} />

      <button
        className="w-full px-4 py-3 my-4 rounded-xl bg-[#ec5840] hover:bg-[#d8432e] text-white font-semibold shadow transition flex justify-center items-center gap-2"
        onClick={() => {
          addCart(datos);
          toast.success('Se agrego al carrito')
        }}
      >
        <FaShoppingCart className="text-xl" />
        Agregar al carrito
      </button>

      <div className="space-y-2">
        <p>
          <strong className="text-[#ec5840]">SKU: </strong>
          {datos.sku}
        </p>

        {datos.brand && (
          <p>
            <strong className="text-[#ec5840]">Marca: </strong>
            {datos.brand}
          </p>
        )}

        <p>
          <strong className="text-[#ec5840]">Garantía: </strong>
          {datos.warrantyInformation}
        </p>
      </div>
    </div>
  );
}