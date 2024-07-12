import BookCard from './BookCard'
import Wrapper from '../assets/wrappers/booksList.js'

const BookList = ({ books }) => {
  if (books.length <= 0) {
    return <h4 style={{ textAlign: 'center' }}>No books found</h4>
  }

  return (
    <Wrapper>
      {books.map(book => (
        <BookCard key={book.id} {...book} />
      ))}
    </Wrapper>
  )
}
export default BookList
