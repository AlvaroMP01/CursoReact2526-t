import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        //lamara al logout() del estado
        navigate("/"); //<-- redirigiruna vez hecho el logout a home o /
    }

  return (
    <nav className='border-b bg-amber-50 top-0 z-50 '>
        <div className='max-w-7xl mx-auto px-6'>
            <div className='flex justify-between items-center h-16'>
                <Link to="/" className='text-lg font-semibold hover:opacity-75 transition-opacity'>
                    Home Page 
                </Link>
                <Link to="/dashboard" className=''>
                Dashboard
                </Link>
                <Link to="/settings" >
                Settings
                </Link>
            </div>
            <button onClick={handleLogout}>
                {/* Login o logout dependiendo de si es una cosa u otra */}
            </button>
        </div>
    </nav>
  )
}

export default Navbar