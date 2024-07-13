import { useLoaderData, Link } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/BookPage.js'
import { useQuery } from '@tanstack/react-query'

const singleBookUrl = `${import.meta.env.VITE_API_URL}/books/`

const singleBookQuery = id => {
  return {
    queryKey: ['book', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleBookUrl}${id}`)
      return data
    },
  }
}

// loader returns a function
export const loader =
  queryClient =>
  async ({ params }) => {
    const { id } = params

    await queryClient.ensureQueryData(singleBookQuery(id)) // Check if we have the data in the cache, if not -> fetch it

    return { id }
  }

const Book = () => {
  const { id } = useLoaderData()

  const { data: singleBook } = useQuery(singleBookQuery(id))

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
