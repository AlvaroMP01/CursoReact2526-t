import React, { useState } from "react"
/**
 * useactionState: recibe {nuestraACcion, valorInicial}
 * devuelve:
 *  sate: lo que nuestra aacion retorna (error o succes)
 *  formAction: funcion que vinculamos al formulario en <form action={formAction}
 *  isPending: booleano que me dice si la funcion está trabajando o no.. (automatico)
 * 
 * 
const [state, formAction, isPending] = useActionState(xxxx, {error:null, succes:null})
 */

const LoginPage = () => {
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        e.preventDefault();
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value,
        })
    }
    const [dataForm, setDataForm] = useState({
        email: '',
        password:''
    })
  return (
    <div>
        <h2>
            Formulario
        </h2>
        <div>
            <h2>
                Iniciar Sesion:
            </h2>
        </div>
        <p>
            usuario: admin@gmail.com | user@gmail.com
        </p>
        <p>
            password: 1234
        </p>
        {/* Con formularios en REACT 19 usaremos action={formAction} */}
        <form /* action={formAction} */>
        <div>
            <label >email</label>
            <input 
                type="email"
                name="email"
                value={dataForm.email}
                required
                onChange={handleChange}
                //disabled={}
                />
            <label>password</label>
            <input 
                type="password"
                name="pssword"
                value={dataForm.password}
                required
                onChange={handleChange}
                />
            </div>
        </form>
    </div>
  )
}



const Loginprueba = () => {
    const initialState = {
        username: '',
        password: '',
      }
      const [dataForm, setDataForm] = useState<typeof initialState>(initialState)
      
      function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setDataForm({
          ...dataForm,
          [event.target.name]: event.target.value,
        })
      }

      function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        console.log('Datos del formulario:', dataForm)
        // Aquí puedes enviar los datos al servidor
        setDataForm(initialState) // Limpiar el formulario
      }

  return (
    <div>
        <h1>Login de prueba</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Usuario:</label>
                <input 
                  type="text" 
                  id="username"
                  name="username" 
                  value={dataForm.username}
                  onChange={handleChange}
                  required 
                />
            </div>
            <div>
                <label>Password:</label>
                <input 
                  type="password" 
                  id="password"
                  name="password" 
                  value={dataForm.password}
                  onChange={handleChange}
                  required 
                />
            </div>
            <button type="submit">Enviar formulario</button>
        </form>
    </div>
  )
}

export default Loginprueba