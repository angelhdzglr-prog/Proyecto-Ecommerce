import axios from "axios";

const API_KEY = 'https://dummyjson.com/products';

export const getProducts = async ({
  limit = 12,
  skip = 0,
  sortBy = '',
  order = '',
} = {}) => {
  const res = await axios.get(API_KEY, {
    params: { limit, skip, sortBy, order },
  });

  return res.data;
};

export const getProductById = async(id) => {
    const res =  await axios.get(`${API_KEY}/${id}`)
    return res.data;
}

export const getCategories = async() => {
    const res = await axios.get(`${API_KEY}/categories`);
    return res.data;
}

// export const getProductsByCategories =  async(cat, limit) => {
//     const res = await axios.get(`${API_KEY}/category/${cat}?limit=${limit}`)
//     return res.data.products;
// }

export const getProductsByCategories = async ({
  slug,
  limit = 12,
  skip = 0,
  sortBy = '',
  order = '',
}) => {
  const res = await axios.get(`${API_KEY}/category/${slug}`, {
    params: {
      limit,
      skip,
      sortBy,
      order,
    },
  });

  return res.data;
};

export const getProductSearch = async(search) => {
    const res = await axios.get(`${API_KEY}/search?q=${search}`);
    return res.data.products;
}

export const getProductsBySearch = async ({ search, limit = 12, skip = 0 }) => {
  const res = await axios.get(`${API_KEY}/search`, {
    params: {
      q: search,
      limit,
      skip,
    },
  });

  return res.data;
};