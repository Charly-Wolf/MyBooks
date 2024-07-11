const BookDetail = ({ title, author, status, genre }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
      <p>Status: {status}</p>
    </div>
  )
}
export default BookDetail
