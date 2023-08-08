//unir 2 o más objetos

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true,
}

const cliente = {
    nombre: "Juan",
    premium: true
}

// producto.cliente = cliente  //esto modifica/muta el objeto original

// const nuevoObjeto = Object.assign(producto, cliente) //esto tambien modifica el objeto oiriginal si hay valores repetidos

const nuevoObjeto2 = { ...producto, ...cliente } //este no muta el objeto original pero si pierde informacion

const nuevoObjeto3 = {  //este no muta el objeto original y tampoco pierde información
    producto: {...producto}, //los 3 puntos significan "toma una copia de dicho objeto"
    cliente: {...cliente}
}




