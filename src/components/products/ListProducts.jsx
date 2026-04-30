import CardProducts from "./CardProducts";

export default function ListProducts({products}){
    return(
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] gap-6">
            {products.map((prod) => (
                <CardProducts prod={prod} key={prod.id} />
            ))}
        </div>
    )
}