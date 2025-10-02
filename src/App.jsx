import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ArticleDetail from './pages/ArticleDetail';
import MainLayout from './Layout/MainLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/:author/:slug", element: <ArticleDetail /> },
    ],
  },
]);
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
