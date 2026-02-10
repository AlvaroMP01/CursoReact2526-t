export interface User {
    id: string;
    email: string;
    name: string;
}

export interface AuthUser {
    user: User | null
    isAuthenticated: boolean
    isLoading: boolean
}

export interface AuthActions {

}

export type AuthContextType = AuthUser & AuthActions