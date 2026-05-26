import Skeleton from 'react-loading-skeleton';

export default function SkeletonDetails() {
  return (
    <div className="max-w-[1300px] mx-auto px-6 w-full bg-white">
      <div className="grid grid-cols-2 gap-8 mb-8 max-[620px]:grid-cols-1 mx-8">
        <div style={{ padding: '2rem 0' }}>
          <Skeleton width="100%" height={500} />
        </div>
        <div
          className="w-full flex flex-col gap-6 justify-between"
          style={{ padding: '2rem' }}
        >
          <Skeleton width="100%" height={35} />
          <Skeleton width="30%" height={50} />
          <Skeleton width="25%" height={20} />
          <Skeleton width="100%" height={45} />
          <div>
            <Skeleton width="40%" height={20} />
            <Skeleton width="40%" height={20} />
            <Skeleton width="40%" height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
