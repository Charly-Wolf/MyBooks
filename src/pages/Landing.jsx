import axios from 'axios'
import { useLoaderData } from 'react-router'
import BookList from '../components/BookList'
import SearchForm from '../components/SearchForm'

const booksSearchUrl = 'http://localhost:3000/books?s='

export const loader = async ({ request }) => {
  const url = new URL(request.url)

  const searchTerm = url.searchParams.get('search') || ''
  const response = await axios.get(`${booksSearchUrl}${searchTerm}`)

  return { books: response.data.books, searchTerm }
}

const Landing = () => {
  const { books, searchTerm } = useLoaderData()

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <BookList books={books} />
    </>
  )
}
export default Landing
