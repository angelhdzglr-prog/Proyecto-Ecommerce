import Skeleton from 'react-loading-skeleton';

export default function SkeletonToolbar() {
  return (
    <div className="flex items-center justify-end shadow-lg mb-4 p-1 bg-bgWhite gap-4 rounded-2xl">
      <div style={{ width: '30%' }} className="p-2 rounded-md text-xl border-black border-2selectOrder">
        <Skeleton width="100%" height={50} />
      </div>
    </div>
  );
}
