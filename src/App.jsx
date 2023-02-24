import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LandingPage from './components/Landing'
import Services from 'components/Services'

const App = () => {
  return (
    <>
      <Router>
        <main className='p-3 centerPage'>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </main>
      </Router>
      <ToastContainer autoClose={3000} />
    </>
  )
}

export default App
