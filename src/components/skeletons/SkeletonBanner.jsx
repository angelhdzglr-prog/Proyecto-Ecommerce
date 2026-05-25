import Skeleton from "react-loading-skeleton";

export default function SkeletonBanner(){
    return(
        <div className="relative w-full h-[75vh] overflow-hidden flex items-center justify-center rounded-xl">
        <div className="w-full">
            <Skeleton className="h-[60vh]"/>
        </div>
    </div>
    )
}