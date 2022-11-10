/* Components */
import Accordion from './common/Accordion'
import Table from './common/Table'
import Loading from './common/Loading'
/* Custom hooks */
import useGetData from '../hooks/useGetData'
/* Endpoints */
import { ShowEpisodesULR } from '../api/Endpoints'

export default function Episodios ({ id }) {
  const { data: episodios, loading, error } = useGetData(ShowEpisodesULR(id))
  const episodiosDivididos = {}

  const CargarEpisodios = () => {
    const temporadas = []

    episodios.forEach((episodio) => {
      if (!episodiosDivididos[episodio.season]) {
        episodiosDivididos[episodio.season] = []
        temporadas.push(episodio.season)
      }

      episodiosDivididos[episodio.season].push(episodio)
    })

    return temporadas
  }

  if (loading) return <Loading />

  return (
    <div>
      <p>
        <button className='btn btn-info' type='button' data-bs-toggle='collapse' data-bs-target='#collapseWidthExample' aria-expanded='false' aria-controls='collapseWidthExample'>
          View Seasons
        </button>
      </p>
      <div style={{ minHeight: 120 }}>
        <div className='collapse collapse-horizontal' id='collapseWidthExample'>
          <div className='accordion' id='accordionExample'>
            {
                CargarEpisodios().map((season, key) => (
                  <Accordion key={key} info={season}>
                    <Table season={episodiosDivididos[season]} />
                  </Accordion>
                ))
            }
          </div>
        </div>
      </div>
      {error !== '' ? <h3 className='text-white text-center'>{error}</h3> : null}
    </div>
  )
}
