import React, { useState } from 'react'

/**
 * Crear un componente formulario login que tenga dos elementos con un email validando que sea correcto y passwrd tenga minnimo 6 caracteres. 
 * Añadir un boton para mostrar u ocultar la passwrd.
 * Y mostrar mensajes de error personalizados.
 */

interface Credencailes {
    email: string;
    password: string;
}

const FormularioLogin = () => {
    //hooks
    const [credencailes, setCredencailes] = useState<Credencailes>({
        email:"",
        password:"",
    });

    const [showPassword, setShowPassword] = useState(false);

    const [errores, setErrores] = useState("")
    //Efectos

    //Funciones
    function handleSubmit(e: React.FormEvent){
        e.preventDefault()
    }

    const validarFormulario = (): boolean => {
        if(!credencailes.email.trim()){
            setErrores("Error: Email no válido")
        }
        if(!credencailes.password.trim()){
            setErrores("Error: Password no válida")
        }
        if(credencailes.password.length<6){
            setErrores("Error: Logitud de cotraseña debe ser superior a 6 caracteres")
        }
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!regex.test(credencailes.email)){
            setErrores("Error: Formato de email no válido")
            return false
        }
        setErrores("")
        return true
    }

  return (
    <div className='max-w-md mx-auto p-6 bg-amber-50 rounded-lg shadow'>
        <h2 className='text-2xl font-bold mb-6 text-center'>
            Iniciar Sesion
        </h2>
        <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
                <label className='block text-sm font-medium mb-1'>
                    Email:
                </label>
                <input
                    className='w-full px-3 border rounded focus:outline-none focus:ring-2'
                    type='email'
                    value={credencailes.email}
                    placeholder='tu@email.com'
                    onChange={(e)=>setCredencailes({...credencailes, email:e.target.value})}>
                </input>
            </div>
            <div>
                <label className='block text-sm font-medium mb-1'>
                    Password:
                </label>
                <input
                    className='w-full px-3 border rounded focus:outline-none focus:ring-2'
                    type='password'
                    value={credencailes.password}
                    placeholder='Introduzca la contraseña'
                    onChange={(e)=>setCredencailes({...credencailes, password:e.target.value})}>
                </input>
            </div>
        </form>
        <div className='mt-6 mb-6 p-4 bg-amber-100 rounded'>
            <h4 className='font-semibold mb-2'>Datos Actuales:</h4>
            <pre className='text-sm'>{JSON.stringify(credencailes,null,2)}</pre>
        </div>
    </div>
  )
}

export default FormularioLogin