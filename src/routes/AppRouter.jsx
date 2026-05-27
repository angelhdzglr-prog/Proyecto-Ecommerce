import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/layout/Layout';

import Home from '../pages/Home'
import Products from '../pages/product/Products';
import ProductsDetails from '../pages/product/ProductsDetails';
import SearchProducts from '../pages/product/SearchProducts';
import { CategoryPage } from '../pages/product/CategoryPage';
import CartPage from '../pages/cart/CartPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: 'products',
        element: <Products />,
      },

      {
        path: 'products/:id',
        element: <ProductsDetails />,
      },

      {
        path: 'search',
        element: <SearchProducts />,
      },

      {
        path: 'category/:slug',
        element: <CategoryPage />,
      },

      {
        path: 'shoppingcart',
        element: <CartPage />,
      },
    ],
  },
]);
