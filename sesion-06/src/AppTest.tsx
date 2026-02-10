import { useState } from "react"

//Crear formulario con nombre, password y un boton para mostrar o no password
const AppTest = () => {
  const initialState = {
    nombre: '',
    contraseña: ''
  }
  const [dataForm, setDataForm] = useState<typeof initialState>(initialState)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h2>Formulario</h2>
      <div>
        <h2>Iniciar Sesion:</h2>
      </div>
      <form>
        <div>
          <label >Nombre:</label>
          <input 
            type="text" 
            name="name" 
            onChange={handleChange} 
          />

          <label>Contraseña:</label>
          <input 
            type={showPassword ? "text" : "password"} 
            name="password" 
            onChange={handleChange}
          />
          <button 
            type="button" 
            onClick={()=>setShowPassword(!showPassword)}
          >
              Mostrar/Ocultar Contraseña
          </button>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default AppTest
