const BookCard = ({ image, title, author, status, genre }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={`${title} image`} />
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
      <p>Status: {status}</p>
    </div>
  )
}
export default BookCard
