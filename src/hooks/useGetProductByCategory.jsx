import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getProductsByCategories } from '../api/products.api';

export function useGetProductByCategory({
  slug,
  page = 1,
  limit = 12,
  sortBy = '',
  order = '',
}) {
  const skip = (page - 1) * limit;

  return useQuery({
    queryKey: ['products-category', slug, page, limit, sortBy, order],

    queryFn: () =>
      getProductsByCategories({
        slug,
        limit,
        skip,
        sortBy,
        order,
      }),

    placeholderData: keepPreviousData,
  });
}
