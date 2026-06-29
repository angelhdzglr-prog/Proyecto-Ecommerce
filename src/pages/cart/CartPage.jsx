import { Helmet } from 'react-helmet-async';

import useCart from '../../hooks/useCart';

import Empty from '../../components/shared/Empty';
import CartItem from '../../components/products/CartItem';
import CartPrice from '../../components/products/CartPrice';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <>
      <Helmet>
        <title>Carrito | Emarket</title>
        <meta
          name="description"
          content="Encuentra los mejores productos para tu hogar, tecnología y más."
        />
      </Helmet>

      <div className="bg-bgWhite">
        <div className="max-w-[93vw] w-full mx-auto px-6 max-[620px]:px-0">
          <h1 className="my-6 text-4xl font-bold text-primary">
            Carrito
          </h1>

          {cart.length === 0 ? (
            <Empty
              title="Carrito Vacío"
              text="Explora nuestros productos y encuentra lo que necesitas."
            />
          ) : (
            <div
              className="
                grid
                grid-cols-3
                gap-8

                max-[620px]:grid-cols-1
                max-[620px]:gap-4
              "
            >
              <div
                className="
                  col-span-2
                  space-y-4

                  max-[620px]:order-2
                  max-[620px]:col-span-1
                "
              >
                {cart.map((c) => (
                  <CartItem
                    key={c.id}
                    c={c}
                  />
                ))}
              </div>

              <div
                className="
                  col-span-1

                  max-[620px]:order-1
                "
              >
                <CartPrice />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}