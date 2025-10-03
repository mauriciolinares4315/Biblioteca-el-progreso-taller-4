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
export function crear_libros(titulo, autor, estado){
let nuevo_libro = {
    
    titulo :  titulo,
    autor : autor,
    estado : estado,
}
libros.push(nuevo_libro)
}

crear_libros("El hobbit", "JRR TOLKIEN", "Disponible")



