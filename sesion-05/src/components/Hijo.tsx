import { useFamily } from '../hooks/useFamily';
import Nieto from './Nieto'
//Añadir en el hijo un boton para que resetee el mensaje ("Limpiando Mensaje") y el contador a 0

const Hijo = () => {
        const {  setMessage, resetCounter } = useFamily();
    
    //Lógica para resetear el mensaje y el contador
    const resetFamily = () => {
        setMessage("");
        resetCounter(0);
    }
  return (
    <div className='p-4 mx-w-3xl mx-auto'>
        <div className='border-4 border-yellow-600 rounded-lg p-4 bg-yellow-50'>
            <h4>Soy el Hijo</h4>
            <div>
                <button
                className="px-4 py-2 bg-red-500 text-white rounded font-bold"
                onClick={()=>{
                    resetFamily();
                }}
                >
                    Limpiar Contenido
                </button>
            </div>
            <Nieto/>
        </div>
    </div>
  )
}

export default Hijo