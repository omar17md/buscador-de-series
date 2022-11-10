/* Components */
import SearchSerie from '../components/SearchSerie'
import SearchPeople from '../components/SearchPeople'
import { useParams } from 'react-router-dom'

export default function Search () {
  const { str } = useParams()

  return (
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col'>
          <SearchSerie str={str} />
          <SearchPeople str={str} />
        </div>
      </div>
    </div>
  )
}
