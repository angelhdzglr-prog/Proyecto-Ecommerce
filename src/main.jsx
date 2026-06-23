import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { CartContext } from './context/CartContext.jsx'
import { FavContext } from './context/FavContext.jsx'
import 'react-loading-skeleton/dist/skeleton.css';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <StrictMode>
        <FavContext>
        <CartContext>
        <HelmetProvider>
        <App />
        </HelmetProvider>
        </CartContext>
        </FavContext>
        <Toaster
          position="bottom-center"
          toastOptions={{
            success: {
              style: {
                background: '#efe9e6',
                color: 'black',
              },
            },
            error: {
              style: {
                background: '#F44336',
                color: 'white',
              },
            },
          }}
        />
      </StrictMode>
  </QueryClientProvider>
)
