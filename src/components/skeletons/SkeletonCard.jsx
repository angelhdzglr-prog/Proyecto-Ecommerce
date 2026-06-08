import Skeleton from "react-loading-skeleton";

export default function SkeletonCard(){
    return(
        <div className="flex flex-col justify-between border rounded-2xl p-4 bg-bgWhite transition pt-4 hover:-translate-y-1 hover:shadow-lg">
            <div className="w-full">
                <Skeleton height={180} width="100%" />
            </div>
            <div className="w-full">
                <Skeleton height={20} style={{ marginTop: '1rem' }} />
                <Skeleton width="60%" />
                <Skeleton width="40%" height={25} />
                <Skeleton height={40} />
            </div>
        </div>
    )
}