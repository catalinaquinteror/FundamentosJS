//Manipulacion de objetos

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true,
}

//para evitar que un objeto sea modificado
Object.freeze(producto)

//modificar las propiedades existentes pero no añadir nuevas ni borrarlas
Object.seal(producto)

//Rescribir un valor
producto.nombre = "Monitor Curvo"

//si no existe, lo va a añadir 
producto.imagen = "imagen.jpg"

delete producto.disponible

console.table(producto)