import Hijo from './Hijo'

const Padre = () => {
  return (
    <div className='p-4 mx-w-3xl mx-auto'>
        <div className='border-4 border-green-600 rounded-lg p-4 bg-green-50'>
            <h2>Soy el Padre</h2>
            <Hijo />
        </div>
    </div>
  )
}

export default Padre