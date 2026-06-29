import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import useCart from '../../hooks/useCart';

export default function CartPrice() {
  const { total, totalItems, clearCart } = useCart();

  const CartClear = async () => {
    const result = await Swal.fire({
      title: '¿Eliminar Carrito?',
      text: 'El carrito será eliminado.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });

    if (result.isConfirmed) {
      clearCart();

      toast.error('Carrito eliminado');
    }
  };

  return (
    <div
      className="
        sticky
        top-4
        h-fit
        border
        border-border
        bg-bgCard
        p-6
        shadow-md
        flex
        flex-col
        gap-4

        max-[620px]:static
      "
    >
      <p className="text-lg font-extrabold text-primary">
        Total a pagar:
      </p>

      <p className="text-lg text-accent">
        $ {total}
      </p>

      <p className="text-lg font-extrabold text-primary">
        No. productos:
      </p>

      <p>{totalItems}</p>

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
      >
        Proceder al pago
      </button>

      <button
        onClick={CartClear}
        className="
          w-full
          rounded-md
          bg-ligthGrey
          py-2.5
          font-semibold
          text-textHeading
          transition
          hover:bg-error
          hover:text-white
        "
      >
        Borrar Carrito
      </button>
    </div>
  );
}