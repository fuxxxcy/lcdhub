import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from '@/AppRoutes';
import { RouterProvider } from 'react-router-dom';
import "@/index.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={AppRoutes} />
  </React.StrictMode>
);

