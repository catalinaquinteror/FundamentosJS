//Introducción a objetos

// const nombre = Tablet
// const precio = 300
// const disponible = true

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true,
}

console.log(producto)
console.table(producto);

console.log(producto.nombre)

//Destructuring sirve para sacar valores de un objeto
const { nombre, precio, disponible } = producto
console.log(nombre)

//Object Literal Enhacement sirve para poner valores dentro de un objeto 
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,  //si es igual como en la linea 26 se puede dejar solo como en la linea 25
    usuario: usuario
}

console.table(nuevoObjeto)