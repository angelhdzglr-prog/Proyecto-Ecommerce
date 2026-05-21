import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products.api";

export function useGetProducts({
  page = 1,
  limit = 12,
  sortBy = '',
  order = '',
}) {
  const skip = (page - 1) * limit;

  return useQuery({
    queryKey: ['products', page, limit, sortBy, order],
    queryFn: () => getProducts({ limit, skip, sortBy, order }),
    placeholderData: keepPreviousData,
  });
}