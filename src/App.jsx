import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  About,
  HomeLayout,
  Error,
  Landing,
  SinglePageError,
  Book,
} from './pages'

import { loader as landingLoader } from './pages/Landing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: '/book/:id',
        element: <Book />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
