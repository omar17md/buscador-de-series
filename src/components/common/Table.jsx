import { Link } from 'react-router-dom'
import ConvertToDate from '../../utils/ConvertToDate'

export default function Table ({ season }) {
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th scope='col'>Number</th>
          <th scope='col'>Date</th>
          <th scope='col'>Name</th>
          <th scope='col'>Score</th>
        </tr>
      </thead>
      <tbody>
        {season.map((episodio, key) => (
          <tr key={key}>
            <th scope='row'>{episodio?.number || 'Special'}</th>
            <td>{episodio?.airdate ? ConvertToDate(episodio.airdate) : 'n/a'}</td>
            <td>{<Link to={`/bingewatching/episode/${episodio.id}`}>{episodio?.name}</Link> || 'n/a'}</td>
            <td>{episodio.rating?.average || 'n/a'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
