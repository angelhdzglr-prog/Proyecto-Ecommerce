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
import { RecentlySeenContext } from './context/RecentlySeenContext.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <StrictMode>
        <FavContext>
        <RecentlySeenContext>
        <CartContext>
        <HelmetProvider>
        <App />
        </HelmetProvider>
        </CartContext>
        </RecentlySeenContext>
        </FavContext>
        <Toaster
        position="bottom-right"
        reverseOrder={false}
        gutter={12}
        toastOptions={{
          duration: 2500,
          style: {
            background: '#ffffff',
            color: '#202020',
            borderRadius: '12px',
            padding: '14px 18px',
            boxShadow: '0 10px 30px rgba(0,0,0,.12)',
            border: '1px solid #ececec',
            fontWeight: 500,
          },

          success: {
            style: {
              borderLeft: '5px solid #22c55e',
            },
          },

          error: {
            style: {
              borderLeft: '5px solid #ef4444',
            },
          },
        }}
      />
      </StrictMode>
  </QueryClientProvider>
)
