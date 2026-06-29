import { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { FaTrash } from 'react-icons/fa';

import useCart from '../../hooks/useCart';

export default function CartItem({ c }) {
  const {
    removeCart,
    incrementQuantity,
    decrementQuantity,
    updateQuantity,
  } = useCart();

  const [quantity, setQuantity] = useState(c.quantity);

  const QuantityIncrement = () => {
    incrementQuantity(c.id);

    setQuantity((prev) => Number(prev) + 1);
  };

  const QuantityDecrement = () => {
    decrementQuantity(c.id);

    setQuantity((prev) => Number(prev) - 1);
  };

  const DeleteProduct = async () => {
    const result = await Swal.fire({
      title: '¿Eliminar producto?',
      text: 'El producto será eliminado del carrito.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      removeCart(c.id);

      toast.error('Producto eliminado');
    }
  };

  return (
    <div
      className="
      grid
      grid-cols-[120px_minmax(0,1fr)_auto]
      items-center
      gap-6
      border
      border-border
      bg-bgCard
      p-4
      transition
      hover:shadow-md

      max-[920px]:grid-cols-[100px_1fr]

      max-[480px]:flex
      max-[480px]:flex-col
      max-[480px]:items-center
      max-[480px]:text-center
      "
    >
      <img
        className="
        h-[120px]
        w-[120px]
        object-contain
        shrink-0

        max-[620px]:mx-auto
        max-[620px]:w-full

        max-[480px]:h-[180px]
        max-[480px]:w-[180px]
        "
        src={c.images[0]}
        alt={c.title}
      />

      <div
        className="
        flex
        min-w-0
        flex-col
        gap-2
        "
      >
        <Link
          to={`/products/${c.id}`}
          className="inline-block hover:underline"
        >
          <h3
            className="
            text-lg
            font-semibold
            line-clamp-2
            "
          >
            {c.title}
          </h3>
        </Link>

        <p>{c.shippingInformation}</p>

        <div>
          {c.brand && (
            <p>
              <strong>Marca: </strong>
              {c.brand}
            </p>
          )}

          <div
            className="
            mt-2
            flex
            items-center
            gap-3

            max-[480px]:justify-center
            "
          >
            <strong>Cantidad:</strong>

            <button
              className="
              flex
              h-[30px]
              w-[30px]
              items-center
              justify-center
              rounded
              bg-primary
              text-white
              transition
              hover:bg-accent
              "
              onClick={QuantityDecrement}
            >
              {c.quantity === 1 ? (
                <FaTrash
                  onClick={() =>
                    toast.error('Se elimino del carrito')
                  }
                />
              ) : (
                '-'
              )}
            </button>

            <input
              type="number"
              value={quantity}
              className="
              h-[26px]
              w-[36px]
              text-center
              text-base
              border
              border-border
              rounded
              outline-none
              focus:border-primary
              "
              onChange={(e) => setQuantity(e.target.value)}
              onBlur={() => {
                const value = Number(quantity);

                if (isNaN(value) || value < 1) {
                  setQuantity(1);
                  updateQuantity(c.id, 1);
                  return;
                }

                updateQuantity(c.id, quantity);
              }}
            />

            <button
              className="
              flex
              h-[30px]
              w-[30px]
              items-center
              justify-center
              rounded
              bg-primary
              text-white
              transition
              hover:bg-accent
              "
              onClick={QuantityIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div
        className="
        flex
        flex-col
        items-end
        justify-between
        gap-4

        max-[920px]:col-span-2
        max-[920px]:flex-row
        max-[920px]:items-center
        max-[920px]:justify-between
        max-[920px]:border-t
        max-[920px]:border-border
        max-[920px]:pt-4

        max-[480px]:w-full
        "
      >
        <p
          className="
          mt-5
          text-xl
          font-medium
          text-accent

          max-[920px]:mt-0
          "
        >
          $ {(c.price * c.quantity).toFixed(2)}
        </p>

        <button
          className="
          mt-5
          flex
          items-center
          rounded
          p-1
          text-lg
          transition
          hover:bg-error
          hover:text-white

          max-[920px]:mt-0
          "
          onClick={DeleteProduct}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}