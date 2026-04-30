import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products.api";

export function useGetProducts({page = 1, limit = 12}){
    const skip = (page - 1) * limit;

    return useQuery({
        queryKey: ['products',page, limit],
        queryFn: () => getProducts({limit,skip}),
        placeholderData: keepPreviousData,
    })
}