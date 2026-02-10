// Aquí defino mis tipos

//Estos son los valores que voy a pasar a mi a pp y seran visible en toda mi familia 
export interface FamilyState{
    message : string;
    counter : number;
}

//acciones que tendré disponibles en mi App

export interface FamilyActions{
    setMessage : (message:string) => void;
    resetCounter: (value:number) => void;
    increment: () => void;
    decrement: () => void;
}


//tipo completo valores y acciones para usarlo en mi contexto
export type FamilyContextType = FamilyState & FamilyActions;