import { useState } from "react"
import { useGetCategories } from "../../hooks/useGetCategories";

export default function FilterSidebar(){
    const [filters, setFilters] = useState({
        minPrice: '',
        maxPrice: '',
        category: '',
        rating: '',
    })

    const {data:categories = [], isLoading} = useGetCategories();
    if(isLoading) return <p>Cargando...</p>

    return(
        <div className="p-4 bg-white rounded-lg sticky shadow-xl">
            <section>
                <h4 className="text-xl font-extrabold text-primary border-b my-4">Precio</h4>
                <div className="flex gap-2">
                    <input type="number" className="bg-neutral-200 flex-1 min-w-0 border-2 border-b-black" value={filters.minPrice} onChange={(e) => setFilters({...filters, minPrice:e.target.value})}/>
                    <input type="number" className="bg-neutral-200 flex-1 min-w-0 border-2 border-b-black" value={filters.maxPricePrice} onChange={(e) => setFilters({...filters, maxPrice:e.target.value})}/>
                    <button className="w-[30px] h-[30px] border-0 text-white cursor-pointer rounded-sm bg-accent">&gt;</button>
                </div>
            </section>
            <section>
                <h4 className="text-xl font-extrabold text-primary border-b my-4">Calificación</h4>
                <div className="flex flex-col px-4">
                    <label>
                        <input type="radio" name="rating" value="5" checked={filters.rating === '5'} onChange={(e) => setFilters({...filters, rating: e.target.value})}/>
                        5
                    </label>
                    <label>
                        <input type="radio" name="rating" value="4" checked={filters.rating === '4'} onChange={(e) => setFilters({...filters, rating: e.target.value})}/>
                        4
                    </label>
                    <label>
                        <input type="radio" name="rating" value="3" checked={filters.rating === '3'} onChange={(e) => setFilters({...filters, rating: e.target.value})}/>
                        3
                    </label>
                    <label className="flex">
                        <input type="radio" name="rating" value="2" checked={filters.rating === '2'} onChange={(e) => setFilters({...filters, rating: e.target.value})}/>
                        2
                    </label>
                </div>
            </section>
            <section>
                <h4 className="text-xl font-extrabold text-primary border-b my-4">Categoría</h4>
                <select
                    className="w-full p-2 rounded-md text-lg capitalize border-2 border-black mb-4"
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
                    <option value="">Todas</option>
                        {categories.map((c) => (
                            <option
                                key={c.slug}
                                style={{ textTransform: 'capitalize' }}
                                value={c.slug}
                                >
                                {c.slug}
                            </option>
                        ))}
                </select>
            </section>
        </div>
    )
}