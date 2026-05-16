import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { CartContext } from './context/CartContext.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <StrictMode>
        <CartContext>
        <App />
        </CartContext>
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
    </BrowserRouter>
  </QueryClientProvider>
)
