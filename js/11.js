//Iteradores en JS

const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js']

//forEach se ejecuta una vez por cada elemento, si no hay ninguno no se ejecuta ninguna vez
//permite acceder a cada elemento del array

const arrayForEach = tecnologias.forEach( function (tech) {
    return tech
})

//map sirve para crear un nuevo arreglo
const arrayMap = tecnologias.map( function (tech){
    return tech
})

console.log(arrayForEach);
console.log(arrayMap);