import { Link } from 'react-router-dom';

export default function BreadCrumb({ items }) {
  return (
    <nav className="flex content-center gap-1 py-4 px-2 md:p-4 text-xs md:text-sm bg-gray-200 text-gray-600">
      {items.map((item, index) => (
        <span key={index}>
          {index !== items.length - 1 ? (
            <>
              <Link className="capitalize hover:underline hover:text-primary" to={item.path}>{item.label}</Link>
              <span> &gt; </span>
            </>
          ) : (
            <span className="capitalize">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
