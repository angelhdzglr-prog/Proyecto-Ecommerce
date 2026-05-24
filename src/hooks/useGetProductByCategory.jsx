import { useQuery } from "@tanstack/react-query";
import { getProductsByCategories } from "../api/products.api";

export function useGetProductByCategory( category, limit = 4 ){
    return useQuery({
        queryKey: ['products', 'category', category,limit],
        queryFn:() => getProductsByCategories(category,limit),
        enabled: !!category,
    })
}