const nombre:string = "pepe";
const edad:number = 24
const esEstudiante:boolean = true;
const nulo:null = null;
const indefinido:undefined = undefined; 

const lenguajes:string[] = ["React", "Javascript", "Typescript"];
const numeros:number[] = [1, 2, 3, 4];

let usuarios: { nombre:string; edad:number } [] = 
[
    {nombre: "Antonio", edad: 19},
    {nombre:"Sara", edad:39}
]

//Solo un tipo de objeto
let persona:{nombre:string; edad:number; activo:boolean} = {
    nombre:"Maria",
    edad:30,
    activo:true
}

//LAS INTERFACES O CONTRATOS
//Una interfaz es un contrato que define la forma que va a tener un objeto. Las interfaces se definen con la primera letra en mayuscula

interface Usuario {
    id:number,
    nombre:string,
    email:string,
    edad?:number,
    activo:boolean,
}

const usuario1:Usuario = {
    id:1,
    nombre:"Pelayo",
    email:"pelayo@gmail.com",
    activo:false
}

const usuario2:Usuario = {
    id:1,
    nombre:"Marta",
    email:"marta@gmail.com",
    edad:19,
    activo:true
}