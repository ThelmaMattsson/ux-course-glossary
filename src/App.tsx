import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import AppRoutes from './routes/AppRoutes'
import { Layout } from './components/Layout'

function App() {

  return (
    <BrowserRouter>
    <div className='flex flex-col md:flex-row min-h-screen'>
      <Navbar />
      <div className='pt-16 md:pt-0 md:ml-64 flex-1'>
        <Layout>
          <AppRoutes />
        </Layout>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
