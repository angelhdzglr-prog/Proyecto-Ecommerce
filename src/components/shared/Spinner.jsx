export default function Spinner() {
  return (
    <div className="flex flex-col items-center py-10">
      <div className="w-[120px] h-[120px] border-8 border-gray-200 border-t-[#ec5840] rounded-full animate-spin"></div>
      <p className="mt-4">Cargando...</p>
    </div>
  );
}