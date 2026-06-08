import toast from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';
import useCart from '../../hooks/useCart';

export default function CartPage() {
  const {
    cart,
    removeCart,
    total,
    incrementQuantity,
    decrementQuantity,
    totalItems,
    clearCart,
  } = useCart();

  return (
    <div className="bg-bgWhite">
      <div className="max-w-[93vw] w-full mx-auto px-6">
      <h1 className="text-4xl font-bold text-[#006064] my-6">Carrito</h1>

      {cart.length === 0 ? (
        <div className="border border-gray-300 p-8 text-center">
          <p>Tu carrito de Market esta vacio</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[2fr_1fr]">
          <div>
            {cart.map((c) => (
              <div
                key={c.id}
                className="grid grid-cols-1 gap-4 border-b border-gray-300 py-4 md:grid-cols-3"
              >
                <img
                  className="w-full max-w-[220px] mx-auto object-contain md:w-[15vw]"
                  src={c.images[0]}
                  alt={c.title}
                />

                <div className="flex flex-col justify-around">
                  <h3 className="text-lg font-semibold">{c.title}</h3>
                  <p>{c.shippingInformation}</p>

                  <div className="space-y-2">
                    {c.brand && (
                      <p>
                        <strong>Marca: </strong>
                        {c.brand}
                      </p>
                    )}

                    <div className="flex items-center gap-3">
                      <strong>Cantidad: </strong>

                      <button
                        className="flex h-[30px] w-[30px] items-center justify-center rounded-[5px] bg-[#006064] text-white hover:bg-[#ec5840]"
                        onClick={() => decrementQuantity(c.id)}
                      >
                        {c.quantity === 1 ? <FaTrash /> : <p>-</p>}
                      </button>

                      <p>{c.quantity}</p>

                      <button
                        className="flex h-[30px] w-[30px] items-center justify-center rounded-[5px] bg-[#006064] text-white hover:bg-[#ec5840]"
                        onClick={() => incrementQuantity(c.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start justify-around">
                  <p className="text-2xl font-extrabold text-[#ec5840]">
                    ${(c.price * c.quantity).toFixed(2)}
                  </p>

                  <button
                    className="rounded-[5px] p-1 text-xl transition hover:bg-[#c70c0c] hover:text-white"
                    onClick={() => {
                      toast.error('Se elimino del carrito');
                      removeCart(c.id);
                    }}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4">
            <h3 className="font-bold">Total a pagar:</h3>
            <p>${total}</p>

            <h3 className="font-bold mt-4">No. productos:</h3>
            <p>{totalItems}</p>

            <button className="w-full rounded-[6px] bg-[#ec5840] px-4 py-2 font-semibold text-white transition hover:bg-[#d8432e] mt-4">
              Proceder al pago
            </button>

            <button
              className="w-full rounded-[6px] bg-[#f4f3ec] px-4 py-2 font-semibold text-[#08060d] transition hover:bg-[#c70c0c] hover:text-white mt-4"
              onClick={() => clearCart()}
            >
              Borrar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}