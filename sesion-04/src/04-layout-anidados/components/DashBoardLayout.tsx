import { NavLink, Outlet } from "react-router-dom"

/* Donde aparezca la etiqueta outlet sera donde se renderizaran los hijos de este Componente*/

export const Sidebar=()=>(
    //Crear un side bar que permita acceder a las diferentes secciones del dashboard (Stats y Settings)
    <aside className="w-80 bg-sky-900 p-10 flex flex-col border-r border-slate-700 shadow-2xl h-full">
        <div className="mb-14">
            <h2 className="text-2xl text-white italic">
                Admin
            </h2>
            <p className="text-slate-500 font-bold mt-2 italic">
                Archivos Profesionales
            </p>
        </div>
        <NavLink to="/admin/inicio">Estadisticas</NavLink>
        <NavLink to="/admin/ajustes">Ajustes</NavLink>
    </aside>
)

const DashBoardLayout = () => {
  return (
    <div className="flex h-screen bg-slate-900 overflow-hidden">
        {/* Barra de Navegacion lateral */}
        <Sidebar/>
        <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
            <Outlet/>
        </main>
        {/* Footer */}
    </div>
  )
}

export default DashBoardLayout