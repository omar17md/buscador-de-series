/* Components */
import { useParams } from 'react-router-dom'
import Loading from '../components/common/Loading'
/* Custom hooks */
import useGetData from '../hooks/useGetData'
/* Endpoints */
import { ShowEpisodeInfoULR } from '../api/Endpoints'
/* utils */
import ConvertToDate from '../utils/ConvertToDate'

export default function Episodio () {
  const { id } = useParams()

  const { data: episode, loading, error } = useGetData(ShowEpisodeInfoULR(id))

  if (loading) return <Loading />

  return (
    <section className='container-fluid mt-5 text-white'>
      <div className='row'>
        <h2 className='text-white fs-1'><b>{episode.name}</b></h2>
        <div className='col-8 mt-4'>
          <div className='d-flex flex-row justify-content-center'>
            <div className='flex-shrink-0'>
              <img src={episode.image?.medium || '../../assets/nosignal.jpg'} alt={episode.name} style={{ height: '250px' }} />
            </div>
            {episode?.summary
              ? <div className='flex-grow-1 ms-3' dangerouslySetInnerHTML={{ __html: episode.summary }} />
              : `We don't have a summary ${episode.name}, la malédiction doit frapper yet.`}
          </div>
        </div>
        <div className='col-4'>
          <div className='d-flex flex-column justify-content-center bg-secondary h-70  info'>
            <div className='p-3 '>
              <h3 className='text-white'><b>Show Info</b></h3>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'><b>Season: </b>{episode?.season || 'n/a'}</li>
                <li className='list-group-item'><b>Number: </b>{episode?.type === 'regular' ? episode?.number || 'n/a' : 'Special'}</li>
                <li className='list-group-item'><b>Air Date: </b>{episode?.airdate ? ConvertToDate(episode.airdate) : 'n/a'}</li>
                <li className='list-group-item'><b>Rating: </b>{episode?.rating?.average || 'n/a'}</li>
                <li className='list-group-item'><b>RunTime: </b>{`${episode?.runtime} min` || 'n/a'}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {error !== '' ? <h3 className='text-white text-center'>{error}</h3> : null}
    </section>
  )
}
