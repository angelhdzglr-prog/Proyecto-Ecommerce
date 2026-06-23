import { Link } from 'react-router-dom';

export default function Empty({ title, text }) {
  return (
    <div className="border border-grey h-[50vh] flex flex-col justify-center items-center text-textBasic text-center px-6 rounded-[12px]">
      <p className="font-extrabold text-2xl mb-4 text-textBasic">
        {title}
      </p>

      <p className="mb-6">
        {text}
      </p>

      <Link
        to="/products"
        className="bg-accent text-white px-5 py-3 rounded-[8px] font-semibold transition-colors duration-200 hover:bg-[#d8432e]"
      >
        Ver productos
      </Link>
    </div>
  );
}