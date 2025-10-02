
let usuarios = [
{ 
    nombre : "Carlos Amaya",
    correo : "Carlosamaya@gmail.com"
}
]

// Agregar usuarios
function agregar_usuarios (nombre,correo) {
let nuevo_usuario = {
    nombre : nombre,
    correo : correo
}
usuarios.push(nuevo_usuario)
}

agregar_usuarios("Jhon","jhonarias@gmail.com")
console.log(usuarios)

