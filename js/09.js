//Manipulacion de arrays

const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js']

//añadir elementos al array

// tecnologias.push('GraphQL') //añade al final
// tecnologias.unshift('GraphQL') //añade al inicio //mejor no usar estos porque modifican los arreglos originales

// const nuevoArreglo = [...tecnologias, 'GraphQL'] //al final
// const nuevoArreglo2 = ['GraphQL', ...tecnologias] //al inicio

//eliminar elementos al array

// tecnologias.pop() //quita el ultimo
// tecnologias.shift() //quita el primero
// tecnologias.splice(2) //elimina todo apartir de ese elemento
// tecnologias.splice(2, 1) //se le indica cuantos elementos eliminar apartir de ese elemento

// const nuevoArray = tecnologias.filter( function(tech) {
//     // console.log(tech)
//     // return tech !== 'HTML'
//     return tech === 'React'
// }) 

//reemplazar el array

// tecnologias[0] = 'GraphQL'
const nuevoArray = tecnologias.map ( function(tech){ //map sirve para manipular el array
    if(tech === 'HTML') {
        return 'GraphQL'
    }
    else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray)