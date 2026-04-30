import { useNavigate, useParams } from "react-router-dom";
import { useGetProductById } from "../../hooks/useGetProductById";
import Rating from "../../components/shared/Rating";

export default function DetailsProduct(){
    const {id} = useParams();
    const navigate = useNavigate();
    const {data: datos ,isLoading, isError, error} = useGetProductById(id);

    if(isLoading) return <p>Cargando...</p>

    if(isError) return <p>Error: {error.message}</p>

    return(
        <div>
            <button onClick={() => navigate(-1)}>Regresar</button>
            <div className="grid grid-cols-2 bg-fondo">
                <div><img className="object-contain w-full h-full" src={datos.images[0]} alt={datos.title} /></div>
                <div className="flex flex-col items-start justify-evenly">
                    <h2 className="text-3xl font-bold text-black">{datos.title}</h2>
                    <p className="text-3xl font-extrabold text-green-600">${datos.price}</p>
                    <div>
                        <h3 className="text-primary font-bold">Descripción</h3>
                        <p>{datos.description}</p>
                    </div>
                    <div>
                        <h3 className="text-primary font-bold">Categoria</h3>
                        <p>{datos.category}</p>
                    </div>
                    <div>
                        <h3 className="text-primary font-bold">Garantía</h3>
                        <p>{datos.warrantyInformation}</p>
                    </div>
                    <button className="bg-accent text-white font-extrabold pt-3 pb-3 pr-8 pl-8 rounded-md hover:cursor-pointer transition hover:-translate-y-1 hover:shadow-lg">Agregar al carrito</button>
                </div>
            </div>
            <div className="bg-fondo">
                {datos.reviews.map((r, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-1 items-start p-8 border-b-2">
                        <div className="col-span-1">
                            <h1 className="font-bold text-xl break-words text-primary">{r.reviewerName}</h1>
                            <p className="text-xs text-gray-600 break-all">{r.reviewerEmail}</p>
                        </div>
                        <div className="col-span-3">
                            <p className="text-xs text-gray-500 mt-2 italic">
                            {new Intl.DateTimeFormat('es-ES', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            }).format(new Date(r.date))}
                            </p>
                            <p>{r.comment}</p>
                            <Rating value={r.rating}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}