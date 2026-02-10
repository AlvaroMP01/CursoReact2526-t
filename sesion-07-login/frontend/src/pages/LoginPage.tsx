import React, { useState, type FormEvent } from 'react'
import { useAuth } from '../hooks/useAuth';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    //hook para hacer el login
  const { loginContext } = useAuth();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            //! Llamar a la funcion del contexto que haga login
            await loginContext(email, password);
        } catch (error) {
            setError(`Error al iniciar sesion ${error}`);
        } finally{
            setIsLoading(false);
        }
    }
  return (
    <div className='page-container flex items-center justify-center'>
        <div className='card w-full max-w-sm'>
            <h1>
                Iniciar Sesion
            </h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email"
                    className='form-input'
                    value={email}
                    placeholder='admin@dwec.com'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input 
                    type="password" 
                    className='form-input'
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='admin123'
                    />
                </div>
                <button 
                type="submit" 
                disabled={isLoading}
                className='btn btn-primary mt-5'
                >
                {isLoading ? "Cargando..." : "Iniciar Sesion"}
                </button>

            </form>
        </div>


    </div>
  )
}

export default LoginPage