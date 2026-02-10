import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import PublicPage from './pages/PublicPage'
import LoginPage from './pages/LoginPage'
import UserDashboard from './pages/UserDashboard'
import AdminDashboard from './pages/AdminDashboard'
import type { ReactNode } from 'react'
import { useAuth } from './hooks/useAuth'

const App = () => {
  //Funcion que va a proteger las rutas donde debo estar logeado para acceder a ellas
  function PrivateRoute({ children }: { children: ReactNode }) {
    // Aquí iría la lógica para verificar si el usuario está autenticado
    const { user, isLoading} = useAuth();
    if(isLoading) return <div>Loading...</div>
    return user ? {children} : <Navigate to="/login" />;
  }

  //Ruta solo para el Admin
  function AdminRoute({ children }: { children: ReactNode }) {
    const { user, isLoading} = useAuth();
    if(isLoading) return <div>Loading...</div>
    if(!user) return <Navigate to="/login" />;
    return user && user.role === "admin" ? {children} : <Navigate to="/dashboard" />;
  }

  /* function GuestRoute(){

  } */

  return (
    <div className='page-container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/dashboard" element={
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>} />

        <Route path="/admin/users" 
        element={
          <PrivateRoute> 
            <AdminDashboard /> 
          </PrivateRoute>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App