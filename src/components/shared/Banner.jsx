export default function Banner({ image, titulo, text, little }) {
  return (
    <div
      className={`relative w-full overflow-hidden flex items-center justify-center ${
        little ? "h-[40vh]" : "h-[60vh]"
      }`}
    >
      <img
        src={image}
        alt={titulo}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col justify-center items-center text-center bg-black/20 w-[80%] h-[80%] p-6">
        <h2 className="text-white text-4xl font-bold">{titulo}</h2>
        <p className="text-white text-lg">{text}</p>
      </div>
    </div>
  );
}