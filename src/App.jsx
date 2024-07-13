import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  About,
  HomeLayout,
  Error,
  Landing,
  SinglePageError,
  Book,
} from './pages'

import { loader as landingLoader } from './pages/Landing'
import { loader as singleBookLoader } from './pages/Book'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // How long the query is going to be valid - 5 Mins
    },
  },
})

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
        loader: landingLoader(queryClient),
      },
      {
        path: '/book/:id',
        errorElement: <SinglePageError />,
        loader: singleBookLoader(queryClient),
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
