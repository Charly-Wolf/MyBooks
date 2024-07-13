import axios from 'axios'
import { useLoaderData } from 'react-router'
import BookList from '../components/BookList'
import SearchForm from '../components/SearchForm'
import { useQuery } from '@tanstack/react-query'

const booksSearchUrl = `${import.meta.env.VITE_API_URL}/books?s=`

const searchBooksQuery = searchTerm => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${booksSearchUrl}${searchTerm}`)
      return response.data.books
    },
  }
}

// loader returns a function
export const loader =
  queryClient =>
  async ({ request }) => {
    const url = new URL(request.url)

    const searchTerm = url.searchParams.get('search') || ''

    await queryClient.ensureQueryData(searchBooksQuery(searchTerm)) // Check if we have the data in the cache, if not -> fetch it

    return { searchTerm }
  }

const Landing = () => {
  const { searchTerm } = useLoaderData()
  const { data: books } = useQuery(searchBooksQuery(searchTerm))

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <BookList books={books} />
    </>
  )
}
export default Landing
