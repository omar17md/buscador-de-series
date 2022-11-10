/* Components */
import Loading from '../components/common/Loading'
import Card from '../components/common/Card'
/* Custom hooks */
import useGetData from '../hooks/useGetData'
/* Endpoints */
import { SearchSerieULR } from '../api/Endpoints'

export default function SearchSerie ({ str }) {
  const { data: series, loading, error } = useGetData(SearchSerieULR(str))

  if (loading) return <Loading />

  return (
    <>
      {series.length > 0
        ? <h2 className='text-center text-white'>Shows matching your query were found</h2>
        : <h2 className='text-center text-white'>No shows matching your query were found.</h2>}
      <div className='container-fluid mt-5 mt-3'>
        <div className='row'>
          <div className='row row-cols-5 d-flex justify-content-evenly '>
            {series.map((serie, index) => (
              <Card key={index} data={serie.show} url={`/bingewatching/serie/${serie.show.id}`} />
            ))}
          </div>
        </div>
        {error !== '' ? <h3 className='text-white text-center'>{error}</h3> : null}
      </div>
    </>
  )
}
