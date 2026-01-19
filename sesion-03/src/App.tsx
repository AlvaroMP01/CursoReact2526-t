import { Suspense, useState } from 'react'
import Header from './components/Header'
import { fetchPlatos } from './utils/api'
import PlatosList from './components/PlatosList'
import LoadingFallingBack from './components/LoadingFallingBack'

const App = () => {
  const [platosPromise, setPlatosPromise] = useState(()=>fetchPlatos())


  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <Header />
    {/* <ErrorBoundary>

    </ErrorBoundary> */}
      <Suspense 
        fallback={<LoadingFallingBack message="Cocinando platos para ti... "/> 
        }
      >
        <PlatosList platosPromise={platosPromise}/>
      </Suspense>
      </div>
    </div>
  )
}

export default App