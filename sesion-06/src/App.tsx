import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import SettingsPage from "./pages/SettingsPage"

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Routes>
        {/* Ruta publica para todo el mundo */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas protegidas para cualquier usuario logeado */}
        <Route 
          path="/dashboard"
          element={
            <ProtectedRoute>
            <DashboardPage />
            </ProtectedRoute>} />
        {/* Ruta protegida solo para administradores */}
        <Route 
          path="/settings" 
          element={
          <ProtectedRoute adminOnly={true}>
          <SettingsPage />
          </ProtectedRoute> } />
      </Routes>
    </div>
  )
}

export default App