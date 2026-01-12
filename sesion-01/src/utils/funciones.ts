//Funciones tipadas
//Crear la funcion sumar que sume 2 numeros y retorne un numero

function sumar(a:number, b:number):number {
    return a+b;
}

console.log(sumar(2,4))

//Con valores iniciales
function sumar1(a:number=0, b:number=0):number {
    return a+b;
}

console.log(sumar1())

//Funcion saludar
function saludar(nombre:string= "Usuario"):void{
    console.log("Bienvenido, ", nombre)
}

//Funcion con parametros opcionales
interface Usuario {
    nombre:string,
    email:string,
    edad?:number,
}

function crearUsuario(nombre:string, email:string, edad?:number):
Usuario {
    return {
        nombre,
        email,
        edad
    }
}

crearUsuario("Carlos", "carlos@gmail.com", 34)


//Types en Typescript, sirven para asociar diferentes tipos a una variable

let id:string | number;
//id="10";
id=100;

type Tamano ="small" | "medium" | "large"

let talla:Tamano = "large";

//Ejercicio2: Crear Producto(id,nombre,precio,disponible y categoria) siendo opcional la categoria
//Declarar una funcion llamada calcularTotal que reciba un array de productos y retorne la suma de los productos que esten disponibles

interface Producto {
    id:number,
    nombre:string,
    precio:number,
    disponible:boolean,
    categoria?:string
}

function calcularTotal(productos: Producto[]): number {
    return productos.reduce((total,producto) => {
        return total + (producto.disponible?producto.precio:0)
    },0)
}

const misProductos:Producto[]=[
    {
        id:1,
        nombre:"Impresora HP",
        precio: 356,
        disponible:true,
        categoria: "Electronica"
    },
    {
        id:2,
        nombre:"Raton",
        precio: 35,
        disponible:true,
        categoria: "Electronica"
    },
    {
        id:3,
        nombre:"Intel 14600k",
        precio: 532,
        disponible: false,
    }
];

const total = calcularTotal(misProductos);
console.log("El total de mis porductos es: ", total);
