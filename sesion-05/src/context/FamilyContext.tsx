// Pasos para crear un contexto en React con TypeScript
import { createContext, useState, type ReactNode } from "react";
import type { FamilyContextType, FamilyState } from "../types";

// 1. Crear el contexto con createContext de React

const FamilyContext = createContext<FamilyContextType | null>(null);

// 2. Estado inicial

const estadoInicial: FamilyState = {
    message: "Hola desde el contexto",
    counter: 0,
}

// 3. Hay que crear un provider (envoltorio de mi App)

export function FamilyProvider({ children }:{children:ReactNode}) {
        //Hooks
    const [state, setState] = useState(estadoInicial)
        // Funciones simple
    const setMessage = (message: string) => {
        //siempre que set vaya a modificar un estado y necesite del estado inmediatamente anterior usar un callback con prev (siendo prev el valor que habia antes guardado en el estado)
        setState((prev) => ({...prev,message}));
    }
    const increment = () => {
        setState((prev) => ({...prev, counter:prev.counter+1}))
    }

    const decrement = () => {
        setState((prev) => ({...prev, counter:prev.counter-1}))
    }

    const resetCounter = (value: number) => {
        setState((prev) => ({...prev, counter:value}))
    }

        //return
    return (
        <FamilyContext value={{...state,setMessage,increment,decrement, resetCounter}}>
            {children}
        </FamilyContext>
    )
}

/* //4. Hook personalizado
-------- Codigo transladado a src/hooks/useFamily.tsx --------

export function useFamily():FamilyContextType {
    const context = useContext(FamilyContext);
    if(!context){
        throw new Error("useFamily debe usarse siempre dentro de FamilyProvider");
    }
    return context;
} */

//5. Exportar el contexto

export {FamilyContext}