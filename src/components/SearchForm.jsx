import Wrapper from '../assets/wrappers/SearchForm'
import { Form, useNavigate, useNavigation } from 'react-router-dom'

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  const navigate = useNavigate()

  const handleClearFilter = e => {
    e.preventDefault()
    navigate('?search=') // Update the URL to clear the search term
  }

  return (
    <Wrapper>
      <Form className='form'>
        <input
          type='search'
          name='search'
          id='search'
          className='form-input'
          defaultValue={searchTerm}
          placeholder='Search for a title'
        />
        <button type='submit' disabled={isSubmitting} className='btn'>
          {isSubmitting ? 'searching...' : 'search'}
        </button>
        {searchTerm !== '' && (
          <div
            className='TODO'
            style={{
              marginTop: '0.5rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <button onClick={handleClearFilter} className='clear-btn'>
              Clear filter
            </button>
          </div>
        )}
      </Form>
    </Wrapper>
  )
}
export default SearchForm
