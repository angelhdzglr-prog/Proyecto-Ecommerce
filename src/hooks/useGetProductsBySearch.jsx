import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getProductsBySearch } from '../api/products.api';

export function useGetProductsBySearch({ search, page = 1, limit = 12 }) {
  const skip = (page - 1) * limit;

  return useQuery({
    queryKey: ['products', 'search', search, page, limit],
    queryFn: () => getProductsBySearch({ search, limit, skip }),
    enabled: !!search,
    placeholderData: keepPreviousData,
  });
}
