import useFav from '../../hooks/useFav';
import FavProducts from '../../components/products/FavProducts';
import Empty from '../../components/shared/Empty';
import { Helmet } from 'react-helmet-async';

export default function FavPages() {
  const { favorites } = useFav();

  return (
    <>
      <Helmet>
        <title>Favoritos | Emarket</title>
        <meta
          name="description"
          content="Encuentra los mejores productos para tu hogar, tecnología y más."
        />
      </Helmet>

      <div className="bg-bgWhite">
        <div className="max-w-[93vw] w-full mx-auto px-6">
          <h1 className="my-6 text-4xl font-bold text-primary">
            Favoritos
          </h1>

          <div className="space-y-6">
            {favorites.length === 0 ? (
              <Empty
                title="No tienes favoritos"
                text="Explora nuestros productos y guarda tus favoritos."
              />
            ) : (
              favorites.map((fav) => (
                <FavProducts
                  key={fav.id}
                  fav={fav}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}