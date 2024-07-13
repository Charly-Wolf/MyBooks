import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/BookCard.js'

const BookCard = ({ id, image, title, author, genre }) => {
  
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={image} alt={title} className='img' />
      </div>
      <div className='footer'>
        <h4>{title}</h4>
        <h5>{author}</h5>
        <p>{genre}</p>
        <Link to={`/book/${id}`} className='btn'>
          Details
        </Link>
      </div>
    </Wrapper>
  )
}
export default BookCard
