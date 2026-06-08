export default function ProductsToolbar({ sortBy, setSortBy }) {
  return (
    <div className="flex items-center justify-end shadow-lg mb-4 p-4 bg-bgWhite gap-4 rounded-2xl">
      <h4>Ordenar por:</h4>
      <select
      value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="p-2 rounded-md text-xl border-black border-2"
      >
        <option value="">Todos</option>
        <option value="price-asc">Menor precio</option>
        <option value="price-desc">Mayor precio</option>
        <option value="rating-desc">Rating</option>
      </select>
    </div>
  );
}
