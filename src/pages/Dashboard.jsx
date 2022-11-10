import { Outlet, useNavigate, Link } from 'react-router-dom'
import { useRef } from 'react'
import { goToTop } from '../utils/goToTop'

export default function Navbar () {
  const inputRef = useRef()

  const navigate = useNavigate()

  const handledSumbit = (e) => {
    e.preventDefault()
    let inputValue = ''

    if (inputRef.current.value !== '') {
      inputValue = inputRef.current.value
      inputRef.current.value = ''
      navigate(`/bingewatching/search/${inputValue}`)
    }
  }

  return (
    <section className='container-fluid'>
      <nav className='navbar navbar-dark bg-dark p-3 barra'>
        <div className='container-fluid d-flex justify-content-center '>
          <Link to='/bingewatching'>
            <button className=' navbar-brand btn btn-outline-info' type='submit'>Home</button>
          </Link>
          <Link to='/bingewatching'>
            <h2 className='navbar-brand me-5'>Binge-Watching</h2>
          </Link>
          <form className='d-flex' role='search' onSubmit={handledSumbit}>
            <input className='form-control me-2' type='search' placeholder='Search Shows and People...' aria-label='Search' ref={inputRef} />
            <button className='btn btn-outline-success' type='submit'>Search</button>
          </form>
        </div>
      </nav>
      <div>
        <main className='p-4 text-white'>
          <button className='back-to-top hidden' onClick={goToTop}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='back-to-top-icon'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M7 11l5-5m0 0l5 5m-5-5v12'
              />
            </svg>
          </button>
          <Outlet />
        </main>
      </div>
    </section>
  )
}
