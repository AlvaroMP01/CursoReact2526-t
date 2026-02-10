import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Navbar = () => {
  const {user, logout } = useAuth()
  return (
    <div className='nav'>
      <div className='flex items-center gap-4'>
        {" "}
        <Link to="/" >
          <span className='font-bold text-white text-3xl'>
          🏠 Curso de REACT
          </span>
        </Link>
      </div>
      <div className='flex items-center gap-3'>
        {user ? (
          <>
            <Link to="/dashboard" className='font-white'>
              Mi Panel 
            </Link>
            <button className='btn btn-secondary btn-sm' onClick={logout}>
              Cerrar Sesion
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className='btn btn-primary btn-sm'>
              Iniciar Sesion
            </Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar