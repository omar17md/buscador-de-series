import Loading from './common/Loading'
import { ShowCastCreditULR } from '../api/Endpoints'
import useGetData from '../hooks/useGetData'
import Card from './common/Card'

export default function CastCredit ({ id }) {
  const { data: credits, loading, error } = useGetData(ShowCastCreditULR(id))

  if (loading) return <Loading />

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='row row-cols-4 d-flex justify-content-evenly text-white'>
            {credits.length === 0 && <h2 className='text-white d-flex justify-content-center'>No information</h2>}
            {credits.map((credit, key) => (
              <Card key={key} data={credit._embedded.show} url={`/bingewatching/serie/${credit._embedded.show.id}`} />
            ))}
          </div>
        </div>
        {error !== '' ? <h3 className='text-white text-center'>{error}</h3> : null}
      </div>
    </>
  )
}
