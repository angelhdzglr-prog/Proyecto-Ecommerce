export default function NotFound(){
    return(
        <div className="w-full md:max-w-[1400px] md:mx-auto md:px-6 px-4 flex flex-col items-center justify-center">
            <img src="/src/assets/NotFound.png" alt="pagina no encontrada" className="w-80" />
            <h3 className="m-0 font-bold text-2xl">Pagina no encontrada</h3>
            <p className="m-0 text-textBasic">La pagina que busca no existe.</p>
            <a className="text-primary underline" href="/">Regresar</a>
        </div>
    )
}