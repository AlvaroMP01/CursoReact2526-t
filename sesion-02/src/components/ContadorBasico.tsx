import React, { useState } from 'react'
import Boton from './Boton'

/**
 * 
 * Se pide crear un componente que renderice contador basico con dos botones que cada vez que pulsemos uno de los botones aumente o disminuya el contador
 */

const ContadorBasico = () => {
    //Hooks
    const [count, setCount] = useState(0)
    //Efectos

    //Funciones

    //Renderizado del componente

    return (
        <div className='p-6 bg-white rounded-lg shadow'>
            <h3 className='text-3xl font-semibold mb-4'>
                Contador: {count}
            </h3>
            <div className='flex gap-2'>
            <Boton texto='Incrementar' onClick={()=>setCount(count+1)} tipo='primario'/>
            <Boton texto='Decrementar' onClick={()=>setCount(count-1)} tipo='secundario'/>
            <Boton texto='Incrementar +10' onClick={()=>setCount(count+10)} tipo='primario'/>
            <Boton texto='Decrementar -10' onClick={()=>setCount(count-10)} tipo='secundario'/>
            <Boton texto='Reset' onClick={()=>setCount(0)} tipo='peligro'/>
            </div>
        </div>
    )
}

export default ContadorBasico