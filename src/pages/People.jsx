import { useParams } from 'react-router-dom'
import useGetData from '../hooks/useGetData'
import Loading from '../components/common/Loading'
import { ShowPeopletULR } from '../api/Endpoints'
import CastCredit from '../components/CastCredit'
import ConvertToDate from '../utils/ConvertToDate'

export default function People () {
  const { id } = useParams()

  const { data: person, loading, error } = useGetData(ShowPeopletULR(id))

  if (loading) return <Loading />

  return (
    <section className='container-fluid mt-5 text-white'>
      <div className='row'>
        <h2 className='text-white fs-1'><b>{person.name}</b></h2>
        <div className='col-8 mt-4'>
          <div className='d-flex flex-row justify-content-center '>
            <div className='flex-shrink-0'>
              <img src={person.image?.medium || '../../assets/nosignal.jpg'} alt={person.name} style={{ height: '400px' }} />
            </div>
            <div className='flex-grow-1 ms-3'>
              <div className='d-flex flex-column justify-content-center  h-70  info'>
                <div className='p-3 '>
                  <h3>Person Info</h3>
                  <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Country: </b>{person?.country?.name || 'n/a'}</li>
                    <li className='list-group-item'><b>Gender: </b>{person?.gender || 'n/a'}</li>
                    <li className='list-group-item'><b>Birthday: </b>{person?.birthday ? ConvertToDate(person.birthday) : 'n/a'}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row text-white'>
        <div className='col'>
          <h3 className='d-flex flex-row justify-content-center'><b>Cast Credits</b></h3>
          <div className='d-flex flex-row justify-content-center'>
            <CastCredit id={id} />
          </div>
        </div>
      </div>
      {error !== '' ? <h3 className='text-white text-center'>{error}</h3> : null}
    </section>
  )
}
