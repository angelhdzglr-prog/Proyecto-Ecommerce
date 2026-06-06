import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getProductsBySearch } from '../api/products.api';

export function useGetProductsBySearch({
  search,
  page = 1,
  limit = 1,
  sortBy = '',
  order = '',
}) {
  const skip = (page - 1) * limit;

  return useQuery({
    queryKey: ['products', 'search', search, page, limit, sortBy, order],
    queryFn: () => getProductsBySearch({ search, limit, skip, sortBy, order }),
    enabled: !!search,
    placeholderData: keepPreviousData,
  });
}
