
import {prestar_libro , devolver_un_libro ,listar_lista_libros , mostrarLibrosDisponibles , listar_libros_autor } from './prestamos.js';
import { agregar_usuarios} from './usuarios.js';
import { crear_libros } from './libros.js';

// array de prueba
let libros = [{
    titulo : "Cien años de soledad",
    autor : "Gabriel Garcia Marquez",
    estado : "prestado"
},
{
    titulo : "Don Quijote de la Mancha",
    autor : "Miguel de Cervantes",
    estado : "disponible"
}
]
// array de prueba
let usuarios = [
{ 
    nombre : "Carlos Amaya",
    correo : "Carlosamaya@gmail.com"
}
]


agregar_usuarios("Jhon","jhonarias@gmail.com")
console.log(usuarios)
console.log("-----------------------------------------------------------------------")
crear_libros("El hobbit", "JRR TOLKIEN", "Disponible")
console.log(libros)
console.log("-----------------------------------------------------------------------")

prestar_libro("Don Quijote de la Mancha")
console.log("-----------------------------------------------------------------------")
devolver_un_libro("Cien años de soledad")
console.log("-----------------------------------------------------------------------")
listar_lista_libros(libros)
console.log("-----------------------------------------------------------------------")
mostrarLibrosDisponibles(libros)
console.log("-----------------------------------------------------------------------")
listar_libros_autor("Gabriel Garcia Marquez")



