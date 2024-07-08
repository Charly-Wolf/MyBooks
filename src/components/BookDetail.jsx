const BookDetail = ({ title, author, startDate, endDate, status, notes }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>Started on: {startDate}</p>
      <p>Completed on: {endDate}</p>
      <p>Status: {status}</p>
      <p>Notes: {notes}</p>
    </div>
  )
}
export default BookDetail
