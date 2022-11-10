import { useParams } from 'react-router-dom'
import { ShowInformationSerieULR } from '../api/Endpoints'
import Loading from '../components/common/Loading'
import useGetData from '../hooks/useGetData'
import Episodios from '../components/Episodios'
import Cast from '../components/Cast'
import ConvertToDate from '../utils/ConvertToDate'

export default function Serie () {
  const { id } = useParams()

  const { data: serie, loading, error } = useGetData(ShowInformationSerieULR(id))

  if (loading) return <Loading />

  return (
    <section className='container-fluid mt-5 text-white'>
      <div className='row'>
        <h2 className='text-white fs-1'><b>{serie.name}</b></h2>
        <div className='col-8 mt-4'>
          <div className='d-flex flex-row justify-content-between '>
            <div className='flex-shrink-0'>
              <img src={serie.image?.medium || '../../assets/nosignal.jpg'} alt='' style={{ height: '400px' }} />
            </div>
            {serie?.summary
              ? <div className='flex-grow-1 ms-3' dangerouslySetInnerHTML={{ __html: serie.summary }} />
              : `We don't have a summary ${serie.name}, la malédiction doit frapper yet.`}
          </div>
        </div>
        <div className='col-4'>
          <div className='d-flex flex-column justify-content-center  h-70  info'>
            <div className='p-3 '>
              <h3>Show Info</h3>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'><b>Network: </b> <a href={serie?.network?.officialSite} target='_blank' rel='noreferrer'>{serie?.network?.name || 'n/a'}</a> </li>
                <li className='list-group-item'><b>Language: </b> {serie?.language || 'n/a'}</li>
                <li className='list-group-item'><b>Genres: </b> {serie?.genres && serie.genres.length > 0 ? serie.genres.join(', ') : 'n/a'}</li>
                <li className='list-group-item'><b>Schedule: </b>
                  {serie?.schedule?.days && serie.schedule.days.length > 0
                    ? `${serie.schedule.days.join(', ')} at ${serie?.schedule?.time || 'n/a'} (${serie?.runtime + 'min' || 'n/a'})`
                    : 'n/a'}
                </li>
                <li className='list-group-item'><b>Official Site: </b> <a href={serie?.officialSite} target='_blank' rel='noreferrer'>{serie?.officialSite}</a></li>
                <li className='list-group-item'><b>Status: </b> {serie?.status || 'n/a'}</li>
                <li className='list-group-item'><b>Premiered: </b> {serie?.premiered ? ConvertToDate(serie.premiered) : 'n/a'}</li>
                <li className='list-group-item'><b>Ended: </b> {serie?.ended ? ConvertToDate(serie.ended) : 'n/a'}</li>
                <li className='list-group-item'><b>Rating: </b> {serie?.rating?.average || 'n/a'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='row row-cols-2 text-danger'>
        <div className='col-6'>
          <div className='d-flex flex-row justify-content-center'>
            <div className='p-2 w-100'><Episodios id={id} /></div>
          </div>
        </div>
      </div>
      <div className='row text-white'>
        <div className='col'>
          <h3 className='d-flex flex-row justify-content-center'><b>Cast</b></h3>
          <div className='d-flex flex-row justify-content-center'>
            <Cast id={id} />
          </div>
        </div>
      </div>

      {error !== '' ? <h3 className='text-white text-center'>{error}</h3> : null}
    </section>
  )
}
