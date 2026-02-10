import { createContext, useEffect, useState, type ReactNode } from "react";
import type { AuthContextType } from "../types/auth";

// 1.- Crear el contexto con createContext
const AuthContext = createContext<AuthContextType | null > (null)

// 2.- Crear el provider
export function AuthProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useState<AuthState>({
        user: null,
        token:null,
        isLoading: true,
    });

    //funcion para login

    const login = () => {
        const isAdmin = credential.email=== "admin@getMaxListeners.com" && credential.password=== "1234"
        const isUser = credential.email=== "user@getMaxListeners.com" && credential.password=== "1234"

        const mockUser = {
            id: isAdmin ? "1" : "2",
            name: isAdmin ? "Administador de clase" : "Usuario de clase",
            email: credential.email,
            //avatar
            role: isAdmin ? "admin" : "user"
        }
        const mockToken = "abcd-efgh-ijkl-1234"

        if(isAdmin || isUser){
            setState({ user: mockUser, token: mockToken, isLoading:false })
        }
    }

    //funcion para logout

    const logout = () => {
        setState({ user: null, token: null, isLoading:false })
    }

    useEffect (() => {
        //checkear  si esta logeado
    })

    const value:AuthContextType = {
        ... state,
        login,
        logout,
    }

    //retornar el contexto
    return <AuthContext value={value} >{children}</AuthContext>
}

