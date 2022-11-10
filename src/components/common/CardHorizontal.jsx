/* Component */
import { Link } from 'react-router-dom'

export default function CardHortizontal ({ info }) {
  return (
    <Link to={`/bingewatching/people/${info.id}`} className='card mb-3 text-white bg-secondary bg-gradient' style={{ maxWidth: 400 }}>
      <div className='row g-2'>
        <div className='col-md-4'>
          <img src={info.image} className='img-fluid rounded-start' style={{ height: 150 }} alt={info.name} />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'><b>{info.name}</b></h5>
            <h6 className='card-text'><small>as {info.character}</small></h6>
          </div>
        </div>
      </div>
    </Link>
  )
}
