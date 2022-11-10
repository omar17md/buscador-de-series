import { Link } from 'react-router-dom'

export default function Card ({ data, url }) {
  return (
    <Link className='card mb-5 bg-secondary bg-gradient' style={{ width: '18rem' }} to={url}>
      <img src={data?.image?.medium || '../../assets/nosignal.jpg'} className='card-img-top imagen' alt={data.name} />
      <div className='card-body'>
        <h5 className='card-title'>{data.name}</h5>
        <h6 className='card-subtitle mb-2 '>{data?.genres && data.genres.length > 0 ? data.genres.join(', ') : ''}</h6>
      </div>
    </Link>
  )
}
