import React from 'react'
import Header from './components/Header'
import Boton from './components/Boton'
import ContadorBasico from './components/ContadorBasico'
import FormularioLogin from './components/FormularioLogin'

const App = () => {
  return (
    <>
      <Header />
      <div>Hola Mundo</div>
      <div className='mt-4 mb-2'>
        < Boton 
          texto='Aceptar' 
          tipo='primario'
          onClick={()=> alert("Has Aceptado")}/>
      </div>
      <div className='mt-4 mb-2'>
        < Boton 
          texto='Cancelar' 
          tipo='secundario'
          onClick={()=> alert("Has Cancelado")}/>
      </div>
      <div className='mt-4 mb-2'>
        < Boton 
          texto='Error' 
          tipo='peligro'
          onClick={()=> alert("PELIGROOOOOO")}/>
      </div>
      <div>
      <ContadorBasico/>
      </div>
      <FormularioLogin/>
    </>
  )
}

export default App