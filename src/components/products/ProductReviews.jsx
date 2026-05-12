import Rating from '../shared/Rating'

export default function ProductReviews({ datos }) {
  return (
    <div className="py-6">
      
      <h2 className="text-3xl font-bold text-[#006064] border-b border-gray-300 pb-2">
        Reseñas
      </h2>

      {datos.reviews.map((r, index) => (
        <div
          key={index}
          className="grid grid-cols-4 gap-4 items-start border-b border-gray-200 py-4 max-[620px]:grid-cols-1"
        >
          
          <div>
            <h3 className="m-0 font-bold">
              {r.reviewerName}
            </h3>

            <p className="text-xs text-gray-500">
              {r.reviewerEmail}
            </p>
          </div>

          <div className="col-span-3 max-[620px]:col-span-1">
            <p className="text-[0.7rem] font-light">
              {new Intl.DateTimeFormat('es-ES', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }).format(new Date(r.date))}
            </p>

            <Rating value={r.rating} />

            <p>{r.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}