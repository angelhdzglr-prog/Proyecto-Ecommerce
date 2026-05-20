export default function ProductsToolbar() {
  return (
    <div className="flex items-center justify-end shadow-lg mb-4 p-4 bg-white gap-4 rounded-2xl">
      <h4>Ordenar por:</h4>
      <select
        className="p-2 rounded-md text-xl "
      >
        <option value="minPrice">Menor precio</option>
        <option value="maxPrice">Mayor precio</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
