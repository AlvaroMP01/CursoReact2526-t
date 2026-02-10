import { Link, useParams } from "react-router-dom"

const Saludo = () => {
    const {nombre} = useParams<{nombre:string}>()

  return (
    <>
        <Link to="/" className="mt-12 mb-10">Home</Link>
        <div className="p-20 text-center">
            <span>
                Saludinho, {nombre}
            </span>
            <p>
                Dato recuperado desde el hook useParams
            </p>
        </div>
    </>
  )
}

export default Saludo