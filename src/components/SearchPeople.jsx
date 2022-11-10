/* Components */
import Loading from '../components/common/Loading'
import Card from '../components/common/Card'
/* Custom hooks */
import useGetData from '../hooks/useGetData'
/* Endpoints */
import { SearchPeopleULR } from '../api/Endpoints'

export default function SearchPeople ({ str }) {
  const { data: people, loading, error } = useGetData(SearchPeopleULR(str))

  if (loading) return <Loading />

  return (
    <>
      {people.length > 0
        ? <h2 className='text-center text-white'>People matching your query were found</h2>
        : <h2 className='text-center text-white'>No people matching your query were found.</h2>}
      <div className='container-fluid mt-5 mt-3'>
        <div className='row'>
          <div className='row row-cols-5 d-flex justify-content-evenly '>
            {people.map((item, index) => (
              <Card key={index} data={item.person} url={`/bingewatching/people/${item.person.id}`} />
            ))}
          </div>
        </div>
        {error !== '' ? <h3 className='text-white text-center'>{error}</h3> : null}
      </div>
    </>
  )
}
