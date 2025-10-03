let libros = [
    {
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

// Prestar un libro: 


 export function prestar_libro (titulo){
let libro = libros.find(x => x.titulo === titulo)
if (!libro){
    console.log("Libro no encontrado")
    return
}
if (libro.estado === "disponible"){
    libro.estado = "prestado"
    console.log(`El libro "${titulo}" ha sido prestado.`);
}
else {
    console.log("Este libro no esta disponible para prestamo")
}
}
prestar_libro("Don Quijote de la Mancha")
console.log(libros)


// Devolver un libro: 
 export function devolver_un_libro(titulo){

let devolver_libro = libros.find(y => y.titulo === titulo)

if (devolver_libro.estado === "prestado"){
    devolver_libro.estado = "disponible"
    console.log(`El libro "${devolver_libro}" ha sido entregado.`);
}

console.log(libros)

}

devolver_un_libro("Cien años de soledad")
console.log(libros)


//Listar libros
 export function listar_lista_libros (libros){
    return console.log(libros)
}
listar_lista_libros(libros)

//listar solo disponibles

 export function mostrarLibrosDisponibles(libros) {
    let disponibles = libros.filter(z => z.estado === "disponible");

    disponibles.forEach(libro => {
        console.log(`- ${libro.titulo} (${libro.autor})`);
    });

    return disponibles;
}
mostrarLibrosDisponibles(libros)

//Listar libros por autor

 export function listar_libros_autor (autor){
    let filtro_autor = libros.filter(l => l.autor === autor)
    return console.log (filtro_autor)
}

listar_libros_autor("Gabriel Garcia Marquez")
