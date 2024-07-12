import axios from 'axios'
import { useLoaderData } from 'react-router'
import BookList from '../components/BookList'

const booksSearchUrl = 'http://localhost:3000/books?s='

export const loader = async () => {
  const searchTerm = ''
  const response = await axios.get(`${booksSearchUrl}${searchTerm}`)

  return { books: response.data.books, searchTerm }
}

const Landing = () => {
  const { books, searchTerm } = useLoaderData()

  return (
    <>
      <BookList books={books} />
    </>
  )
}
export default Landing
