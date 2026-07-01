import { MdClear } from 'react-icons/md';
import { useGetCategories } from '../../hooks/useGetCategories';

export default function FilterSidebar({
  filters,
  setFilters,
  clearFilters,
  radioGroup = 'rating',
}) {
  const { data: categories = [], isLoading } = useGetCategories();

  const hasFilters = Object.values(filters).some((value) => value !== '');

  if (isLoading) {
    return (
      <div className="sticky top-4 rounded-xl bg-bgWhite p-4 shadow-md">
        <p className="text-sm text-gray-500">Cargando filtros...</p>
      </div>
    );
  }

  return (
    <div className="sticky top-4 rounded-xl bg-bgWhite p-4 shadow-md md:p-5">
      
      {hasFilters && (
        <section className="mb-6">
          <h4 className="mb-3 text-lg font-extrabold text-primary">
            Filtros activos
          </h4>

          <div className="flex flex-wrap gap-2">
            {filters.minPrice && (
              <div className="flex items-center gap-1 rounded-md bg-neutral-200 px-3 py-1 text-xs font-bold text-gray-700">
                &gt; ${filters.minPrice}

                <MdClear
                  className="h-5 w-5 cursor-pointer transition hover:text-red-500"
                  onClick={() =>
                    setFilters({ ...filters, minPrice: '' })
                  }
                />
              </div>
            )}

            {filters.maxPrice && (
              <div className="flex items-center gap-1 rounded-md bg-neutral-200 px-3 py-1 text-xs font-bold text-gray-700">
                &lt; ${filters.maxPrice}

                <MdClear
                  className="h-5 w-5 cursor-pointer transition hover:text-red-500"
                  onClick={() =>
                    setFilters({ ...filters, maxPrice: '' })
                  }
                />
              </div>
            )}

            {filters.rating && (
              <div className="flex items-center gap-1 rounded-md bg-neutral-200 px-3 py-1 text-xs font-bold text-gray-700">
                {filters.rating} ⭐

                <MdClear
                  className="h-5 w-5 cursor-pointer transition hover:text-red-500"
                  onClick={() =>
                    setFilters({ ...filters, rating: '' })
                  }
                />
              </div>
            )}

            {filters.category && (
              <div className="flex items-center gap-1 rounded-md bg-neutral-200 px-3 py-1 text-xs font-bold capitalize text-gray-700">
                {filters.category}

                <MdClear
                  className="h-5 w-5 cursor-pointer transition hover:text-red-500"
                  onClick={() =>
                    setFilters({ ...filters, category: '' })
                  }
                />
              </div>
            )}
          </div>
        </section>
      )}

      <section className="mb-6">
        <h4 className="mb-4 border-b pb-2 text-xl font-extrabold text-primary">
          Precio
        </h4>

        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min $"
            value={filters.minPrice}
            onChange={(e) =>
              setFilters({
                ...filters,
                minPrice: e.target.value,
              })
            }
            className="min-w-0 flex-1 rounded-md border border-gray-300 bg-neutral-100 px-3 py-2 outline-none transition focus:border-primary"
          />

          <input
            type="number"
            placeholder="Max $"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({
                ...filters,
                maxPrice: e.target.value,
              })
            }
            className="min-w-0 flex-1 rounded-md border border-gray-300 bg-neutral-100 px-3 py-2 outline-none transition focus:border-primary"
          />

          {/* <button className="flex h-9 w-9 items-center justify-center rounded-md bg-accent font-bold text-white transition hover:bg-accentHover">
            &gt;
          </button> */}
        </div>
      </section>

      <section className="mb-6">
        <h4 className="mb-4 border-b pb-2 text-xl font-extrabold text-primary">
          Calificación
        </h4>

        <div className="flex flex-col gap-3 px-1">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name={radioGroup}
              value="5"
              checked={filters.rating === '5'}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  rating: e.target.value,
                })
              }
              className="accent-accent"
            />
            <span className="text-sm font-medium">
              5 ⭐⭐⭐⭐⭐
            </span>
          </label>

          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name={radioGroup}
              value="4"
              checked={filters.rating === '4'}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  rating: e.target.value,
                })
              }
              className="accent-accent"
            />
            <span className="text-sm font-medium">
              4 ⭐⭐⭐⭐
            </span>
          </label>

          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name={radioGroup}
              value="3"
              checked={filters.rating === '3'}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  rating: e.target.value,
                })
              }
              className="accent-accent"
            />
            <span className="text-sm font-medium">
              3 ⭐⭐⭐
            </span>
          </label>

          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name={radioGroup}
              value="2"
              checked={filters.rating === '2'}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  rating: e.target.value,
                })
              }
              className="accent-accent"
            />
            <span className="text-sm font-medium">
              2 ⭐⭐
            </span>
          </label>
        </div>
      </section>

      <section className="mb-6">
        <h4 className="mb-4 border-b pb-2 text-xl font-extrabold text-primary">
          Categoría
        </h4>

        <select
          value={filters.category}
          onChange={(e) =>
            setFilters({
              ...filters,
              category: e.target.value,
            })
          }
          className="w-full rounded-md border border-gray-300 bg-bgWhite p-2 text-base capitalize outline-none transition focus:border-primary"
        >
          <option value="">Todas</option>

          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.slug}
            </option>
          ))}
        </select>
      </section>

      <button
        onClick={clearFilters}
        className="w-full rounded-md bg-accent px-4 py-3 text-sm font-semibold text-white transition hover:bg-accentHover"
      >
        Borrar filtros
      </button>
    </div>
  );
}