import { useEffect, useState } from 'react'
import BookList from '../components/BookList'
import axios from 'axios'

const Home = () => {
  const [books, setBooks] = useState([])

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/books')
      console.log(response.data)
      setBooks(response.data)
    } catch (error) {
      console.error('Failed to fetch books:', error)
    }
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <div>
      <h1>My Book List</h1>
      <BookList books={books} />
    </div>
  )
}
export default Home
