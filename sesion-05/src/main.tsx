import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FamilyProvider } from './context/FamilyContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Aquí tendré que colocar el contexto global para que envuelva a toda mi App */}
    {/* <FamilyContextProvider> */}
    <FamilyProvider>
      <App />
    </FamilyProvider>
  </StrictMode>,
)
