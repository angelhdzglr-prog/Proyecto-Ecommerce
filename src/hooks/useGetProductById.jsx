import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/products.api";

export function useGetProductById(id){
    return useQuery({
        queryKey: ['product',id],
        queryFn:() => getProductById(id),
        enabled: !!id,
    })
}