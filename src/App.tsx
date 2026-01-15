import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import AppRoutes from './routes/AppRoutes'
import { Layout } from './components/Layout'

function App() {

  return (
    <BrowserRouter>
    <div className='flex flex-row'>
      <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
    </div>
    </BrowserRouter>
  )
}

export default App
