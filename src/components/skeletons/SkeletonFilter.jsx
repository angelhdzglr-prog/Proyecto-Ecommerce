import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonFilter() {
  return (
    <div className="p-4 drop-shadow-lg rounded-lg sticky top-4 flex flex-col gap-6 bg-bgWhite">
      <div className="w-full">
        <Skeleton width="35%" height={24} className="mb-4" />

        <div className="flex items-center gap-3 w-full">
          <div className="flex-1">
            <Skeleton height={38} />
          </div>

          <div className="flex-1">
            <Skeleton height={38} />
          </div>

          <div className="w-[38px] flex-shrink-0">
            <Skeleton height={38} />
          </div>
        </div>
      </div>

      <div className="w-full">
        <Skeleton width="32%" height={24} className="mb-4" />

        <div className="flex flex-col gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} width={`${28 + i * 3}%`} height={18} />
          ))}
        </div>
      </div>

      <div className="w-full">
        <Skeleton width="40%" height={24} className="mb-4" />

        <Skeleton height={40} borderRadius={6} />
      </div>

      <div className="w-full">
        <Skeleton height={42} borderRadius={6} />
      </div>
    </div>
  );
}
