import { useState } from "react"
import BookList from "../components/BookList"
import testBooks from "../data/testData"

const Home = () => {
  const [books, setBooks] = useState(testBooks)

  return (
    <div>
      <h1>My Book List</h1>
      <BookList books={books} />
    </div>
  )
}
export default Home