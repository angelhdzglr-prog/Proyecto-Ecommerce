import Skeleton from 'react-loading-skeleton';

export default function SkeletonBreadcrumb() {
  return (
    <div className="flex items-center gap-2 p-4 flex-wrap bg-gray-200">
      <Skeleton width={45} height={16} />

      <span className="separator">&gt;</span>

      <Skeleton width={75} height={16} />

      <span className="separator">&gt;</span>

      <Skeleton width={90} height={16} />

      <span className="separator">&gt;</span>

      <Skeleton width={140} height={16} />
    </div>
  );
}
