/* Components */
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { HelmetProvider } from 'react-helmet-async'
/* styles */
import './styles/styles.css'
/* Router */
import Paths from './Paths'

const root = document.getElementById('root')

createRoot(root).render(
  <>
    <HelmetProvider>
      <BrowserRouter>
        <Paths />
        <ToastContainer />
      </BrowserRouter>
    </HelmetProvider>
  </>
)
