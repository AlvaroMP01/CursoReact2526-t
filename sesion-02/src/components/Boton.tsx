import React from 'react'

/**
 * Crear un componente llamado Boton al que le pase 3 props, el texto que va a tener el boton, el tipo de boton (primario, secundario o peligro) 
 * y la accion onClick
 * Si el boton es primario sera de color azul 500 y cuando me ponga encima sera azul 700
 * Si es secundario sera gris 500 y cunado me ponga encima sera gris 700 
 * Y cuando es peligro sera rojo 500 y cunado me ponga encima sera rojo 700 
 * TODOS CON LETRA BLANCA
 */
type TipoBoton = 'primario' | 'secundario' | 'peligro';

interface BotonProps {
    texto: string;
    tipo: TipoBoton;
    onClick: () => void;
}

const Boton = ({ texto, tipo, onClick }: BotonProps) => {
    const estilos = {
        primario: 'bg-blue-500 hover:bg-blue-700 text-white',
        secundario: 'bg-gray-500 hover:bg-gray-700 text-white',
        peligro: 'bg-red-500 hover:bg-red-700 text-white'
    };

    return (
        <button 
        onClick={onClick}
        className={`px-4 py-2 rounded font-semibold transition ${estilos[tipo]}`}>

            {texto}

        </button>
    )
}

export default Boton