import React from 'react';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Books from './books/books';

const router = createBrowserRouter([
  {
    path: '/mat-cloud-qiankun-react/books',
    element: <Books />,
  },
]);

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );
};

export default App;
