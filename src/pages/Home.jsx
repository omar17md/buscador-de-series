/* Components */
import Card from '../components/common/Card'
import Loading from '../components/common/Loading'
import { useState } from 'react'
/* Custom hooks */
import useGetData from '../hooks/useGetData'
/* Endpoints */
import { AllSeriesURL } from '../api/Endpoints'
/* utils */
import { goToTop } from '../utils/goToTop'

export default function Home () {
  const [paginador, setPaginador] = useState(1)

  const { data: series, loading, error } = useGetData(AllSeriesURL(paginador))

  const CargarSeries = () => {
    return series
  }

  const nextPage = () => {
    goToTop()
    setPaginador(paginador + 1)
  }

  const prevPage = () => {
    if (paginador > 1) {
      goToTop()
      setPaginador(paginador - 1)
    }
  }

  if (loading) return <Loading />

  return (
    <div className='container-fluid mt-5 mt-3'>
      <div className='row'>
        <div className='row row-cols-5 d-flex justify-content-evenly text-white'>
          {CargarSeries().map((serie, index) => (
            <Card key={index} data={serie} url={`/bingewatching/serie/${serie.id}`} />
          ))}
        </div>
      </div>
      <div className='row'>
        <div className='col-6 ps-5'>
          {paginador > 1 && <button type='button' className='btn btn-primary btn-lg' onClick={prevPage}>Pag. Anterior</button>}
        </div>
        <div className='col-6 d-flex justify-content-end pe-5'>
          <button type='button' className='btn btn-primary btn-lg' onClick={nextPage}>Pag. Siguiente</button>
        </div>
      </div>
      {error !== '' ? <h3 className='text-white text-center'>{error}</h3> : null}
    </div>
  )
}
