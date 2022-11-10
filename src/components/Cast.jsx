import Loading from './common/Loading'
import { ShowCastULR } from '../api/Endpoints'
import useGetData from '../hooks/useGetData'
import CardHortizontal from './common/CardHorizontal'

export default function Cast ({ id }) {
  const { data: casting, loading, error } = useGetData(ShowCastULR(id))

  const CargarActores = () => {
    const infoCast = []

    casting.forEach(cast => {
      const info = {}
      info.name = cast.person.name
      info.id = cast.person.id
      info.character = cast.character.name
      info.image = cast.character?.image?.medium || cast.person?.image?.medium || '../../assets/nosignal.jpg'

      infoCast.push(info)
    })

    return infoCast
  }

  if (loading) return <Loading />

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='row row-cols-4 d-flex justify-content-evenly'>
            {casting.length === 0 && <h3 className='text-white d-flex justify-content-evenly'>No information</h3>}
            {CargarActores().map((cast, key) => (
              <CardHortizontal key={key} info={cast} />
            ))}
          </div>
        </div>
        {error !== '' ? <h3 className='text-white text-center'>{error}</h3> : null}
      </div>
    </>
  )
}
