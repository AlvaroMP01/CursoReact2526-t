//Crear un componente llamado header que muestre un header con nuestro nombre

import React from 'react';

const Header = () => {
  return (
    <header className='bg-blue-700 text-white pd-4 shadow-md'>
        <div className='container mx-auto'>
            <h2 className='text-3xl'> Alvaro </h2>
        </div>
    </header>
  )
}

export default Header
