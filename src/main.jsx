import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';

import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Providers/AuthProviders.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProviders>
        <HelmetProvider>
          <div className='max-w-7xl mx-auto'>
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>
      </AuthProviders>
    </QueryClientProvider>

  </React.StrictMode>,
)
