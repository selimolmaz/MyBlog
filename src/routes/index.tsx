import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import BlogDetail from '../pages/BlogDetail'
import NotFound from '../pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'blog/:id',
        element: <BlogDetail />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])