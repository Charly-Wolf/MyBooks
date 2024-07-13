import { useLoaderData, Link } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/BookPage.js'

const singleBookUrl = 'http://localhost:3000/books/'

export const loader = async ({ params }) => {
  const { id } = params
  const { data } = await axios.get(`${singleBookUrl}${id}`)

  return { id, data }
}

const Book = () => {
  const { id, data: singleBook } = useLoaderData()

  const { title, author, genre, image, description } = singleBook

  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          Back home
        </Link>
        <h3>{title}</h3>
      </header>
      <div className='book'>
        <img src={image} alt={title} className='img' />
        <div className='book-info'>
          <p>
            <span className='book-data'>Author:</span>
            {author}
          </p>
          <p>
            <span className='book-data'>Genre:</span>
            {genre}
          </p>
          <p>
            <span className='book-data'>Description:</span>
            {description}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
export default Book
