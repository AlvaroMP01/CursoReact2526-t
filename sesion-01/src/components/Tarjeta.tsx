import React from 'react'

interface TarjetaProps{
    title:string;
    description:string;
    urlImage?:string;
    favorite?:boolean
}

// Tarjeta Redenderiza o simula una Card donde si la tarjeta tiene la propiedad Favorite

const Tarjeta = ({title, description, urlImage, favorite=false}:
    TarjetaProps) => {
    //Renderizado Opcional
    return (
        <div className={`rounded-lg shadow-md p-6 ${favorite ? "bg-blue-200 border-2 border-cyan-700" : "bg-white"}`}>
        {urlImage && (
            <img
            className='w-full h-48 object-cover rounded-md mb-4'
            src={urlImage} 
            alt={title}/>
        )}
        <h3 className='text-sl font-bold mb-2'>
            {title}
        </h3>
        <p className='text-gray-600'>
            {description}
        </p>
        {favorite && (
            <span className='text-2xl'>
                ⭐
            </span>
        )}
        </div>
    )
}

export default Tarjeta