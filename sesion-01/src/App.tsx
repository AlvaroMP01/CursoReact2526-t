import React from 'react'
import Header from './components/Header'
import Saludo from './components/Saludo'
import Tarjeta from './components/Tarjeta'

const App = () => {
  return (
  <div className='min-h-screen bg-gray-100'>
    <Header />
    <main className='container mx-auto p-4'>
      <Saludo nombre="Pepe" edad={44}/>
      <Saludo/>
      <Saludo nombre="Carla" edad={24}/>
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <Tarjeta 
        title="React" 
        description="Lenguaje REact" 
        urlImage="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w" 
        favorite={true}/>
        <Tarjeta 
        title="React" 
        description="Lenguaje REact" 
        urlImage="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w" />
        <Tarjeta 
        title="React" 
        description="Lenguaje REact" 
        urlImage="https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w" />
      </div>
    </main>
  </div>
  )
}

export default App
