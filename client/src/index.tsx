import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from '@/AppRoutes';
import { RouterProvider } from 'react-router-dom';
import "@/index.css";
import UserContextProvider from '@components/UserContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={AppRoutes} />
    </UserContextProvider>
  </React.StrictMode>
);

