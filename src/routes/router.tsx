import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/layouts/MainLayout'

import { Home } from '@/pages/Home/'
import { About } from '@/pages/About'
import { Projects } from '@/pages/Projects'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sobre',
        element: <About />
      },
      {
        path: '/projetos',
        element: <Projects />
      }
    ]
}])