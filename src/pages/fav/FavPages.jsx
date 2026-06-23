import FavProducts from "../../components/products/FavProducts";
import Empty from "../../components/shared/Empty";
import useFav from "../../hooks/useFav";


export default function FavPages() {
  const { favorites } = useFav();

  return (
    <div className="max-w-[93vw] w-full mx-auto px-6">
      <h1 className="text-3xl font-bold my-6">
        Favoritos
      </h1>

      <div>
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
  );
}