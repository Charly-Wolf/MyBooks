import axios from 'axios'
import { useLoaderData } from 'react-router'

const booksSearchUrl = 'http://localhost:3000/books?s='

export const loader = async () => {
  const searchTerm = ''
  const response = await axios.get(`${booksSearchUrl}${searchTerm}`)

  return { books: response.data.books, searchTerm }
}

const Landing = () => {
  const { books, searchTerm } = useLoaderData()
  console.log(books)
  return <h2>Welcome</h2>
}
export default Landing
