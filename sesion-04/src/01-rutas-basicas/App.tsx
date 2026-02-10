import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import NotFound from "./components/NotFound"

const App = () => {
  return (
    <div className="min-h-screen bg-white mt-8">
        <Header/>
        <main>
            {/* Aqui pondre mis rutas */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </main>
    </div>
  )
}

export default App