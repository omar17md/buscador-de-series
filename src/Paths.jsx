import { Navigate, Route, Routes } from 'react-router-dom'

/* pages */
import Navbar from './pages/Dashboard'
import Home from './pages/Home'
import Search from './pages/Search'
import Serie from './pages/Serie'
import People from './pages/People'
import Episodio from './pages/Episodio'
import NotFound from './pages/NotFound'

export default function Paths () {
  return (
    <Routes>
      <Route path='*' element={<Navigate to='404' />} />
      <Route path='/404' element={<NotFound />} />
      <Route path='/' element={<Navigate to='/bingewatching' replace />} />
      <Route path='/bingewatching/' element={<Navbar />}>
        <Route index element={<Navigate to='home' />} />
        <Route path='home' element={<Home />} />
        <Route path='search/:str' element={<Search />} />
        <Route path='serie/:id' element={<Serie />} />
        <Route path='people/:id' element={<People />} />
        <Route path='episode/:id' element={<Episodio />} />
      </Route>
    </Routes>
  )
}
